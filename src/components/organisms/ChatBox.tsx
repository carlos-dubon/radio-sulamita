import {
  collection,
  CollectionReference,
  query,
  orderBy,
  limitToLast,
  Query,
} from "firebase/firestore";
import { FC, useEffect, useRef } from "react";
import { Message } from "../templates/Contact";
import { db } from "@app/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { formatTimestamp } from "@lib/helpers";
import Image from "next/image";
import { Spinner } from "@lib/atoms";

const ChatBox: FC = () => {
  const chatBoxRef = useRef<HTMLDivElement | null>(null);

  const messagesRef: CollectionReference<Message> = collection(
    db,
    "chat"
  ) as CollectionReference<Message>;

  const messagesQuery: Query<Message> = query(
    messagesRef,
    orderBy("date", "asc"),
    limitToLast(30)
  );

  const [messages, loading] = useCollectionData(messagesQuery);

  const chatBoxScrollToBottom = (): void => {
    const chatBox: HTMLDivElement | null = chatBoxRef.current;

    if (chatBox) {
      chatBox.scrollTop = chatBox.scrollHeight - chatBox.clientHeight;
    }
  };

  useEffect(() => {
    chatBoxScrollToBottom();
  }, [messages]);

  return (
    <div
      ref={chatBoxRef}
      className="w-full h-72 md:h-[27.5rem] overflow-auto flex flex-col gap-4"
    >
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="w-full text-xs text-center text-stone-600">
          Mostrando los últimos {messages?.length} mensajes
        </div>
      )}

      {!loading &&
        messages?.map((m: Message) => {
          return (
            <div
              key={m.id}
              className={`flex flex-col ${
                m.admin ? "bg-rs-primary" : "bg-white"
              } p-3 text-xs w-11/12 ${m.admin ? "ml-auto" : null}`}
            >
              <div
                className={`flex flex-col sm:flex-row justify-between ${
                  m.admin ? "text-stone-200" : "text-stone-500"
                } mb-1`}
              >
                <div className="mb-1 sm:m-0">
                  {m.admin ? (
                    "RADIO SULAMITA"
                  ) : (
                    <div className="capitalize">{m.name}</div>
                  )}
                </div>
                <div>{formatTimestamp(m.date)}</div>
              </div>

              {m.admin ? null : (
                <div className="flex justify-between text-stone-500">
                  {m.email ? <div>{m.email}</div> : <div>-</div>}
                  <div>
                    <Image
                      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${m.country}.svg`}
                      alt={`${m.country} flag`}
                      title={`${m.country}`}
                      width={20.37}
                      height={14}
                    />
                  </div>
                </div>
              )}

              <div
                className={`leading-[150%] mt-2 ${
                  m.admin ? "text-white" : null
                }`}
              >
                {m.body}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export { ChatBox };

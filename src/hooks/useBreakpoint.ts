import create from "@kodingdotninja/use-tailwind-breakpoint";
import resolveConfig from "tailwindcss/resolveConfig";
import { TailwindConfig } from "tailwindcss/tailwind-config";

import tailwindConfig from "../../tailwind.config";

const config: TailwindConfig = resolveConfig(tailwindConfig);

export const { useBreakpoint } = create(config.theme.screens!);

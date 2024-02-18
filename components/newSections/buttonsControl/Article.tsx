import { useUI } from "$store/sdk/useUI.ts";
import Icon from "../../ui/Icon.tsx";
import FlagTime from "../FlagTime/FlagTime.tsx";
import type { ItemsTopic } from "$store/components/newSections/PrimarySection.tsx";
import ButtonLink from "../ButtonLink.tsx";

export interface Props extends ItemsTopic {
  index: string;
}

export default function Article({ props }: { props: Props }) {
  const { showArticle } = useUI();

  return (
    <div
      class={`gap-6 flex flex-col justify-start relative ease-in duration-300 ${
        showArticle.value === props.index
          ? "visible opacity-100 h-full"
          : "invisible opacity-0 "
      }`}
      onClick={() => {
        console.log("click");
      }}
    >
      {showArticle.value === props.index &&
        (
          <>
            <h3 class="text-4xl text-white font-semibold text-start">
              {props.title}
            </h3>
            <span
              class="text-lg text-[#A1A1AA] text-start"
              dangerouslySetInnerHTML={{ __html: props.subTitle }}
            >
            </span>
            <h5 class=" text-white font-medium text-2xl text-start">
              {props.content.title}
            </h5>
            {props.flagTime && <FlagTime label={props.flagTime} />}
            <ul>
              {props.content.content.map((content) => (
                <li class="text-lg text-[#A1A1AA] text-start flex flex-row items-center gap-2">
                  <Icon id="Plus-Deco" size={24} /> {content}
                </li>
              ))}
            </ul>
            {props.button?.label && (
              <ButtonLink
                label={props.button.label}
                href={props.button.href || ""}
              />
            )}
          </>
        )}
    </div>
  );
}

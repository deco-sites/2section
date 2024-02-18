import { useUI } from "$store/sdk/useUI.ts";
import { useSignal } from "@preact/signals";
import Icon from "../../ui/Icon.tsx";
import FlagTime from "../FlagTime/FlagTime.tsx";
import { ItemsTopic } from "../PrimarySection.tsx";

export interface Props extends ItemsTopic {
  index: string;
}

export default function ButtonTab({ props }: { props: Props }) {
  const { showArticle } = useUI();
  const showArticleMobile = useSignal(false)

  function teste() {
    showArticle.value = props.index;
  }

  function showMobile() {

    showArticleMobile.value = !showArticleMobile.value

  }

  return (
    <div class="flex justify-start flex-col">

      <button
        class={`${showArticle.value === props.index ? "text-white" : "text-[#52525B]"
          } text-start hidden lg:flex `}
        onClick={teste}
      >
        {props.title}
      </button>

      <button
        class={`text-white text-lg text-center bg-[#0535354D] rounded-full w-full flex flex-col gap-2 lg:hidden items-center min-h-[100px] justify-center `}
        onClick={showMobile}
      >
        {props.title}
        {props.flagTime && <FlagTime label={props.flagTime} />}
      </button>
      <div class={`flex flex-col text-[#A1A1AA] gap-6 ${showArticleMobile.value ? "h-auto mb-4 mt-3 opacity-100" : "h-0 opacity-0 -z-10 fade"} anima ease-in-out duration-300 `}>
        <span dangerouslySetInnerHTML={{ __html: props.subTitle }}>
        </span>
        <ul class="gap-4 flex flex-col">
          {props.content.content.map((content) => (
            <li class="text-lg  text-start flex flex-row items-start gap-2">
              <Icon id="Plus-Deco" size={18} class={"min-w-[18px] mt-[6px]"} /> {content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

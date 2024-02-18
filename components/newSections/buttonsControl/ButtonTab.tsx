import { useUI } from "$store/sdk/useUI.ts";

export interface Props {
    index: string;
    label: string;
}

export default function ButtonTab({ props }: { props: Props }) {
    const { showArticle } = useUI()

    console.log("load", props.index)


    function teste() {
        showArticle.value = props.index
    }

    return (
        <button class={`${showArticle.value === props.index ? "text-white" : "text-[#52525B]"} text-start`} onClick={teste}>
            {props.label}
        </button>
    )
}
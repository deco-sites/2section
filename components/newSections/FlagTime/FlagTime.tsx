interface Props {
  label: string;
}

export default function FlagTime({ label }: Props) {
  return (
    <div class="text-white absolute top-0 right-0 text-sm bg-[#053535] rounded-3xl p-3">
      {label}
    </div>
  );
}

interface Props {
  label: string;
  href: string;
}

export default function ButtonLink({ label, href }: Props) {
  return (
    <a
      class="self-center mt-auto bg-[#02F67C] text-black rounded-full font-medium text-lg px-4 py-2"
      href={href}
    >
      {label}
    </a>
  );
}

interface RichTextProps {
  text: string;
}

export const RichText = ({ text }: RichTextProps) => (
  <>
    {text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part,
    )}
  </>
);

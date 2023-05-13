interface CommonAboutText {
  title: string;
  text: string;
}

export function CommonAboutText({ title, text }: CommonAboutText) {
  return (
    <div className="w-full h-fit flex flex-col justify-start gap-3">
      <h4 className="text-about text-sm">{title}</h4>
      <p className="text-about text-justify">{text}</p>
    </div>
  )
}
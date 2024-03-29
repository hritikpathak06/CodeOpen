import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const CodeRender = () => {
  const fullCode = useSelector((state: RootState) => state.compiler.fullCode);

  const combinedCode = `<html><style>${fullCode.css}</style><body>${fullCode.html}</body><script>${fullCode.javascript}</script></html>`;
  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    combinedCode
  )}`;
  return (
    <div>
      <div className="bg-white h-[calc(100dvh-60px)]">
        <iframe className="w-full h-full" src={iframeCode} />
      </div>
    </div>
  );
};

export default CodeRender;

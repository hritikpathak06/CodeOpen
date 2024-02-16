import CodeEditor from "@/components/CodeEditor";
import CodeRender from "@/components/CodeRender";
import HelperHeader from "@/components/HelperHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

// export default function Compile() {
//   return (
//     // <div className="flex flex-col h-screen">
//     // <div className="flex-grow flex flex-col sm:flex-row">
//     // <ResizablePanelGroup direction="horizontal" className="">
//     //   <ResizablePanel
//     //     defaultSize={50}
//     //     className=" h-[calc(100vh-60px)] min-w-[350px]"
//     //   >
//     //     <HelperHeader />
//     //     <CodeEditor />
//     //   </ResizablePanel>
//     //   <ResizableHandle />
//     //   <ResizablePanel
//     //     defaultSize={50}
//     //     className=" h-[calc(100vh-60px)] min-w-[350px]"
//     //   >
//     //     {/* Right Side */}
//     //     <CodeRender />
//     //   </ResizablePanel>
//     // </ResizablePanelGroup>
//     // </div>
//     // </div>

    
//   );
// }

export default function Compile() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <ResizablePanelGroup direction="vertical" className="h-full">
          <ResizablePanel
            defaultSize={50}
            className="h-[calc(50vh-30px)] min-h-[200px] min-w-full"
          >
            <HelperHeader />
            <CodeEditor />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel
            defaultSize={50}
            className="h-[calc(50vh-30px)] min-h-[200px] min-w-full"
          >
            <CodeRender />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

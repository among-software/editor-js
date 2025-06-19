import EditorSection from "./components/Editor/EditorSection/EditorSection";
import TitleSection from "@/components/Title/TitleSection/TitleSection";

function App() {
  const data = {
    time: 1750308557926,
    blocks: [
      {
        id: "IUK_fD2hGM",
        type: "paragraph",
        data: { text: "test", align: "left" },
      },
      {
        id: "h48gtaH2iO",
        type: "paragraph",
        data: { text: "<b>ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹ</b>", align: "center" },
      },
    ],
    version: "2.30.7",
  };
  return (
    <div className="App">
      {/* <TitleSection /> */}
      <EditorSection value={data} />
    </div>
  );
}

export default App;

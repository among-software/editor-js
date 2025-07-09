import EditorSection from "./components/Editor/EditorSection/EditorSection";
import TitleSection from "@/components/Title/TitleSection/TitleSection";

function App() {
  const data = {
    time: 1750655789889,
    blocks: [
      {
        id: "FDlqWHGwf5",
        type: "unifiedImage",
        data: {
          images: [
            {
              url: "https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_96c6313b6d6a405b9511658326418a69/lotte-foundation/uploads/2025-06-22/57603eb4-706c-484b-a424-a2041ba3be5b.jpg",
              name: "20240711_213243.jpg",
              size: 3241512,
              type: "image/jpeg",
              width: 1024,
              height: 2252,
              ratio: 0.3410301953818828,
            },
          ],
          caption: "",
          align: "center",
        },
      },
      {
        id: "YuL-guusDx",
        type: "list",
        data: {
          style: "unordered",
          items: ["ㅁㄴㅇㄹ"],
        },
      },
    ],
    version: "2.30.7",
  };

  return (
    <div className="App">
      {/* <TitleSection /> */}
      <EditorSection value={data} width="912px" />
    </div>
  );
}

export default App;

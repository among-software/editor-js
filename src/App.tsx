import EditorSection from "./components/Editor/EditorSection/EditorSection";
import TitleSection from "@/components/Title/TitleSection/TitleSection";

function App() {
  const data = {
    time: 1750655789889,
    blocks: [
      {
        id: "_h0FJetfDX",
        type: "unifiedImage",
        data: {
          images: [
            {
              url: "https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_96c6313b6d6a405b9511658326418a69/lotte-foundation/uploads/2025-07-04/23d493c2-7796-4e49-9132-7d2d9d1b161f.jpg",
              name: "[붙임7] 인도네시아 장학금 전달식.jpg",
              size: 4881420,
              type: "image/jpeg",
              width: 853.9931640625,
              height: 2507,
              ratio: 0.3406434639260072,
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

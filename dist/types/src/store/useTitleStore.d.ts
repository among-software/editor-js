import { TitleStore } from "../types/store/title.types";
/**
 * 글의 제목 섹션과 관련된 전역 상태를 관리하는 스토어
 * 제목, 부제목, 커버 이미지/컬러, 폰트 등의 상태와 관련 설정 함수들을 포함
 */
declare const useTitleStore: import("zustand").UseBoundStore<import("zustand").StoreApi<TitleStore>>;
export default useTitleStore;

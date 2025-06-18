import { PlaceSearchResult } from "../types/api/kakao.types";
/**
 * 카카오 로컬 API를 사용하여 장소 검색 결과를 가져오는 유틸리티 함수
 * @param query 검색어
 * @returns 검색 결과 배열 (id, name, address, url 포함)
 */
export declare const fetchPlaceData: (query: string) => Promise<PlaceSearchResult[]>;

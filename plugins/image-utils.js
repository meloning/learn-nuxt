/**
 * 이미지 URL에 랜덤 쿼리 매개변수를 추가하여 이미지 캐싱을 피하고 강제로 새 이미지를 불러옵니다.
 *
 * @param {string} imageUrl - 랜덤 쿼리 매개변수를 추가할 이미지 URL입니다.
 * @returns {string} - 랜덤 쿼리 매개변수가 추가된 이미지 URL입니다.
 */
export const addRandomQueryToImageUrl = (imageUrl) => {
  return `${imageUrl}?random=${Math.random()}`
}

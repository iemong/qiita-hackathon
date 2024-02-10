export const extractUrls = (text: string): string[] => {
  // 正規表現でURLをマッチング: HTTPまたはHTTPSで始まり、スペースや終端で終わらない文字列
  const urlRegex = /https?:\/\/[^\s]+/g;
  const urls = text.match(urlRegex);
  return urls || [];
};

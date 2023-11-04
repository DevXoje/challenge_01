/**
 *
 * @param {string} messageCrypt
 * @returns string
 */
export function deCryptStrange(messageCrypt) {
  let messageDecrypt = "";
  const regexToClean = new RegExp("[\n\t]", "g");
  const messageCryptLower = messageCrypt.toLowerCase();
  const messageCryptClean = messageCryptLower.replace(regexToClean, "");
  const words = messageCryptClean.split(" ");
  const wordsUnique = [...new Set(words)];
  const messageAlmostDecrypted = [];
  for (const element of wordsUnique) {
    const regex = new RegExp(`\\b${element}\\b`, "gi");
    const result = messageCryptLower.match(regex);
    let name = "";
    try {
      name = result[0];
      const numAppearances = result.length;
      const record = `${name}${numAppearances}`;
      messageAlmostDecrypted.push(record);
    } catch (error) {
      console.error(error);
    }
  }
  messageDecrypt = messageAlmostDecrypted.join("");
  return messageDecrypt;
}

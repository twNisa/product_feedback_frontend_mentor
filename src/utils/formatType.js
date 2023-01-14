export default function formatType(type){
  const words = type.split("-")
  return words.map(word => (word[0].toUpperCase() + word.slice(1))).join("-")
}

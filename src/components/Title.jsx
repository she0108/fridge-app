import { getRandomItem } from "../utils/getRandomItem";

const TITLE_LIST = [
  "냉장고에 뭐 있지?",
  "냉장고에 뭐 없나?",
  "뭐 먹을 거 없나?",
  "냉장고 좀 볼까?",
];

export default function Title() {
  return (
    <section id="title">
      <h1 className="text-2xl font-bold">{getRandomItem(TITLE_LIST)}</h1>
    </section>
  );
}

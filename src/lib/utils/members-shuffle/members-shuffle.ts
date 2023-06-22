import type { Member } from "#/lib/configs/member/member.type";

export const shuffleMembers = (members: Member[]): Member[] => {
  const shuffledMembers = [...members];

  for (let i = shuffledMembers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledMembers[i], shuffledMembers[j]] = [shuffledMembers[j], shuffledMembers[i]];
  }

  return shuffledMembers;
};
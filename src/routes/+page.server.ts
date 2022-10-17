import { error } from "@sveltejs/kit";
import { getMembersUsernames } from "../libraries/api/member";
import { gqlRequest } from "../libraries/utils/request"

export const load = async () => {
  const members = await gqlRequest(getMembersUsernames);
  if (!members.success) throw error(404, "Members not found");

  return {
    members: members.data
  }
}
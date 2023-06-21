import { Dropdown, DropdownButton, DropdownLink, DropdownSeparator } from "#/lib/components/atoms/dropdown/profile";
import { BsDiscord, BsGearFill, BsPencilFill } from "react-icons/bs";
import { FaPaperPlane, FaSignOutAlt } from "react-icons/fa";
import type { Component } from "#/lib/utils/component";
import type { NavbarDropdownProps } from "./navbar-dropdown.type";

export const NavbarDropdown: Component<NavbarDropdownProps> = ({ member, logout }) => {
  return (
    <Dropdown label={member.username} icon={member.profilePicture} iconSize={32}>
      <DropdownLink href="/user" className="hover:text-white">
        <BsGearFill /> Paramètres du compte
      </DropdownLink>
      <DropdownLink href="/user/articles" className="hover:text-white">
        <BsPencilFill /> Écrire un nouvel article
      </DropdownLink>

      {member.canBeContacted && (
        <DropdownLink href="/user/settings" className="hover:text-white">
          <FaPaperPlane /> Messagerie (3 non-lus)
        </DropdownLink>
      )}

      <DropdownSeparator />

      <DropdownLink href="https://royaume.world/discord" className="hover:text-discord" target="_blank">
        <BsDiscord /> Rejoindre le discord
      </DropdownLink>

      <DropdownSeparator />

      <DropdownButton className="hover:text-danger" onClick={() => logout()}>
        <FaSignOutAlt /> Se déconnecter
      </DropdownButton>
    </Dropdown>
  );
};
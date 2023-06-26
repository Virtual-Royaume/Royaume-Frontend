"use client";

import type { Techno } from "#/lib/configs/member/member.type";
import { useState, type ReactElement } from "react";
import { Heading } from "#/lib/components/atoms/texts/heading";
import { Text } from "#/lib/components/atoms/texts";
import { BsArrowDown, BsArrowUp, BsPlus, BsTrash } from "react-icons/bs";
import Image from "next/image";
import { technoList } from "#/lib/configs/member";
import { s } from "#/lib/utils/style/class";
import { Input } from "#/lib/components/atoms/input";
import { Switch } from "#/lib/components/atoms/switch";
import { Label } from "#/lib/components/atoms/label";
import { Button } from "#/lib/components/atoms/button";

const MemberPage = (): ReactElement => {
  const [list, setList] = useState(technoList.slice(0, 4));
  const [findList, setFindList] = useState<Techno[] | []>([]);

  const findTechno = (techno: string): void => {
    if (!techno || techno.length === 0) {
      setFindList([]);
      return;
    }

    const newList = technoList.filter((item) => item.name.toLocaleLowerCase().includes(techno.toLocaleLowerCase()) && !list.includes(item));
    setFindList(newList);
  };

  const handleDeleteTechno = (techno: string): void => {
    const newList = list.filter((item) => item.name !== techno);
    setList(newList);
  };

  const handleAddTechno = (techno: Techno): void => {
    const newList = [...list, techno];
    setList(newList);

    const newFindList = findList.filter((item) => item.name !== techno.name);
    setFindList(newFindList);

    const input = document.querySelector<HTMLInputElement>("#techno");
    if (input) input.value = "";
  };

  const handleMoveTechnoUp = (techno: string): void => {
    const index = list.findIndex((item) => item.name === techno);
    const newList = [...list];
    const temp = newList[index];
    newList[index] = newList[index - 1];
    newList[index - 1] = temp;
    setList(newList);
  };

  const handleMoveTechnoDown = (techno: string): void => {
    const index = list.findIndex((item) => item.name === techno);
    const newList = [...list];
    const temp = newList[index];
    newList[index] = newList[index + 1];
    newList[index + 1] = temp;
    setList(newList);
  };

  return (
    <div className="container">
      <Heading type="h1" className="font-bold">Modifier mon profil</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <div className="bg-background-card mt-5 rounded">
            <div className="p-5">
              <div>
                <Label title="Nom d'utilisateur">
                  <Input
                    className="w-full"
                    placeholder="John Doe"
                  />
                </Label>

                <div className="mt-2">
                  <Label title="Apparaitre dans la liste des membres">
                    <Switch />
                  </Label>
                </div>
              </div>

              <Button className="mt-5">
                Sauvegarder
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-background-card mt-5 rounded">
            <div className="p-5">
              <div>
                <Label title="Décrivez-vous">
                  <textarea
                    className={s(
                      "flex bg-background-card border-2 rounded focus-within:ring-2 rounded",
                      "outline-none bg-background-card text-white-desc rounded px-3 py-2 w-full",
                      "border-background-info focus-within:ring-purple"
                    )}
                    placeholder="Décrivez-vous en quelques mots..." />
                </Label>
              </div>

              <Button className="mt-5">
                Sauvegarder
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-background-card rounded">
            <div className="p-5">
              <Text className="font-bold">Vos technologies</Text>

              {list.map((techno) => (
                <div key={techno.name} className="mt-2 flex justify-between bg-background-card-hover p-2 rounded">
                  <div className="flex gap-2 items-center">
                    <Image className="select-none" src={"/images/icons/" + techno.icon} alt={techno.name} width={20} height={20} />
                    <Text className="select-none">{techno.name}</Text>
                  </div>

                  <div className="flex gap-2 items-center">
                    {list.indexOf(techno) !== list.length - 1 && (
                      <BsArrowDown
                        onClick={() => handleMoveTechnoDown(techno.name)}
                        className="select-none cursor-pointer p-1 rounded hover:bg-background-card text-white-desc hover:text-primary h-6 w-6" />
                    )}

                    {list.indexOf(techno) !== 0 && (
                      <BsArrowUp
                        onClick={() => handleMoveTechnoUp(techno.name)}
                        className="select-none cursor-pointer p-1 rounded hover:bg-background-card text-white-desc hover:text-primary h-6 w-6" />
                    )}

                    <BsTrash
                      onClick={() => handleDeleteTechno(techno.name)}
                      className="select-none p-1 rounded h-6 w-6 hover:bg-background-card text-white-desc hover:text-danger"  />
                  </div>
                </div>
              ))}

              {list.length !== technoList.length && (
                <div className="mt-4">
                  {list.length === 0 && (
                    <Text className="mt-2">Vous n&apos;avez pas encore ajouté de technologie, vous pouvez en ajouter une, ci-dessous.</Text>
                  )}

                  <div className="flex gap-2 items-center mt-2">
                    <input
                      className="bg-background-card-hover text-white-desc border-white-desc p-2 rounded cursor-text outline-none w-full"
                      type="text"
                      placeholder="Chercher une technologie"
                      id="techno"
                      onChange={(e) => findTechno(e.target.value)}
                    />
                  </div>

                  {findList.length !== 0 && findList.map((techno) => (
                    <div key={techno.name} className="mt-2 flex justify-between bg-background-card-hover p-2 rounded">
                      <div className="flex gap-2 items-center">
                        <Image className="select-none" src={"/images/icons/" + techno.icon} alt={techno.name} width={20} height={20} />
                        <Text className="select-none">{techno.name}</Text>
                      </div>

                      <div className="flex gap-2 items-center">
                        <BsPlus
                          onClick={() => handleAddTechno(techno)}
                          className={s(
                            "select-none cursor-pointer p-1 rounded hover:bg-background-card text-white-desc hover:text-primary h-6 w-6"
                          )} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
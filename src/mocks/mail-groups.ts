import { mailGroupItem } from "@/types/mail-groups";

const mockMailGroups: mailGroupItem[] = [
  {
    id: "123",
    title: "Przykładowa kampania",
    description: "Opis kampani tu jest",
    subject: "Tytuł maila",
    text: "Przykładowy text",
  },
  {
    id: "456",
    title: "Inna kampania",
    text: "Inny tekst",
  },
];

export default mockMailGroups;

import { mailGroupItem } from "@/types/mail-groups";

export const mailGroupTable = [
  {
    name: "title",
    required: true,
    label: "Nazwa kampani",
    align: "left",
    field: (row: mailGroupItem): string => row.title,
    format: (val: string): string => `${val}`,
    sortable: true,
  },
  {
    name: "description",
    label: "Opis",
    align: "left",
    field: (row: mailGroupItem): string | undefined => row.description,
    format: (val: string | undefined): string => val || "-",
    sortable: true,
  },
  {
    name: "subject",
    label: "Tytuł maila",
    align: "left",
    field: (row: mailGroupItem): string | undefined => row.subject,
    format: (val: string | undefined): string => val || "-",
    sortable: true,
  },
  {
    name: "actions",
    align: "center",
    label: "Akcje",
  },
];

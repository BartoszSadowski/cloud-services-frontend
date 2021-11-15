import { Store } from ".";
import { mailGroupListItem } from "@/types/mail-groups";
import http from "@/utils/http";

// TODO: Implement properly
interface MailGroups extends Object {
  mailGroupItems: mailGroupListItem[];
}

class MailGroupsStore extends Store<MailGroups> {
  protected data(): MailGroups {
    return {
      mailGroupItems: [],
    };
  }

  async retrieveMailCampaigns() {
    if (this.state.mailGroupItems.length !== 0) {
      return this.state.mailGroupItems;
    }

    const mailGroups: mailGroupListItem[] = (await http
      .get("email_campaigns")
      .then((val) => val.data)) as mailGroupListItem[];
    this.state.mailGroupItems = mailGroups;
    return mailGroups;
  }
}

export const mailGroupsStore = new MailGroupsStore();

import { Store } from ".";
import { mailGroupItem } from "@/types/mail-groups";
// import http from "@/utils/http";

import mockMailGroups from "@/mocks/mail-groups";

// TODO: Implement properly
interface MailGroups extends Object {
  mailGroupItems: mailGroupItem[];
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

    await new Promise((res) => setTimeout(res, 2000));

    // const mailGroups: mailGroupListItem[] = (await http
    //   .get("email_campaigns")
    //   .then((val) => val.data)) as mailGroupListItem[];
    // this.state.mailGroupItems = mailGroups;
    this.state.mailGroupItems = mockMailGroups;
    return mockMailGroups;
  }

  async addMailCampaign(mailCampaign: mailGroupItem) {
    await new Promise((res) => setTimeout(res, 2000));

    this.state.mailGroupItems.push({ ...mailCampaign, id: `${new Date()}` });
    return mailCampaign;
  }

  async editMailCampaign(mailCampaign: mailGroupItem) {
    await new Promise((res) => setTimeout(res, 2000));

    this.state.mailGroupItems.splice(
      this.state.mailGroupItems.findIndex(
        (item: mailGroupItem) => item.id === mailCampaign.id
      ),
      1,
      mailCampaign
    );
    return mailCampaign;
  }
}

export const mailGroupsStore = new MailGroupsStore();

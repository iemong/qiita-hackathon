export class OGPHandler {
  ogpTitle: string;
  ogpImageUrl: string;

  constructor() {
    this.ogpTitle = "";
    this.ogpImageUrl = "";
  }
  element(element: Element) {
    switch (element.getAttribute("property")) {
      case "og:title":
        this.ogpTitle = element.getAttribute("content") ?? "";
        break;
      case "og:image":
        this.ogpImageUrl = element.getAttribute("content") ?? "";
        break;
      default:
        break;
    }
  }
}

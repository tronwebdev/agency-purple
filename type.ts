// Generated by https://quicktype.io

export interface WizardResponse {
  message: string;
  agency_wizard: AgencyWizard;
}

export interface AgencyWizard {
  id: number;
  workspace_id: number;
  seo: SEO;
  website_details: WebsiteDetails;
  services: Service[];
  service_benefits: ServiceBenefit[];
  testimonials: Service[];
  contact: Contact;
  leads_image: string | null;
  leads_collector: string | null;
  preview_ui: string;
  created_at: Date;

  logo_light: string | null;
  phone_number: string | null;
}

export interface Contact {
  address: Address;
  introduction: IIntroduction;
  about: IAbout;
  help: IHelp;
  socials: ISocials;
}

export interface ISocials {
  facebook: string;
  instagram: string;
  youtube: string;
  linkedin: string;
}

export interface IAbout {
  about_image: null | string;
  about_desc: null | string;
  about_cta: null | boolean;
}

export interface Address {
  businessName: string;
  address1: string;
  address2: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
}

export interface IHelp {
  help_image: null | string;
  help_headline: null | string;
  help_desc: null | string;
  help_cta: null | boolean;
}
export interface IIntroduction {
  intro_headline: null | string;
  intro_desc: null | string;
  intro_cta: null | boolean;
  intro_cta_button_link: null | string;
  intro_video_url: null | string;
}
export interface SEO {
  title: null;
  desc: null;
  image: null;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  metaImage: null | string;
  created_at: Date;
}

export interface ServiceBenefit {
  id: number;
  name: string;
  description: string;
  metaImage: null | string;
  created_at: Date;
}

export interface WebsiteDetails {
  agencyName: string;
  contactNotification: string;
  url: string;
  customJavascript: null;
  logo: string;
  favIcon: string;
}

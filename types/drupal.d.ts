import {DrupalFile, DrupalMedia, DrupalNode, DrupalParagraph, DrupalTaxonomyTerm} from "next-drupal";

// Node Types.
interface BasicPage extends DrupalNode {
  su_basic_page_type?: DrupalTaxonomyTerm[]
  su_page_banner?: DrupalParagraph
  su_page_components?: DrupalParagraph[]
  su_page_description?: string
  su_page_image?: DrupalMedia
  su_shared_tabs?: DrupalTaxonomyTerm[]
}

interface Course extends DrupalNode {
  body?: DrupalWysiwyg
  su_course_academic_year?: string
  su_course_code?: string
  su_course_id?: number
  su_course_instructors?: string[]
  su_course_link?: DrupalLink
  su_course_quarters?: DrupalTaxonomyTerm[]
  su_course_section_units?: string
  su_course_subject?: DrupalTaxonomyTerm
  su_course_tags?: DrupalTaxonomyTerm[]
  su_shared_tags?: DrupalTaxonomyTerm[]
}

interface Event extends DrupalNode {
  body?: DrupalWysiwyg
  su_event_alt_loc?: DrupalWysiwyg
  su_event_audience?: DrupalTaxonomyTerm[]
  su_event_components?: DrupalParagraph[]
  su_event_cta?: DrupalLink
  su_event_date_time?: DrupalSmartDate
  su_event_dek?: string
  su_event_email?: string
  su_event_groups?: DrupalTaxonomyTerm[]
  su_event_keywords?: DrupalTaxonomyTerm[]
  su_event_location?: DrupalAddress
  su_event_map_link?: DrupalLink
  su_event_schedule?: DrupalParagraph[]
  su_event_source?: DrupalLink
  su_event_sponsor?: string[]
  su_event_subheadline?: string
  su_event_subject?: DrupalTaxonomyTerm[]
  su_event_telephone?: string
  su_event_type?: DrupalTaxonomyTerm[]
  su_shared_tags?: DrupalTaxonomyTerm[]
}

interface EventSeries extends DrupalNode {
}

interface News extends DrupalNode {
  su_news_banner_media_caption?: string
  su_news_publishing_date?: string
  su_news_banner?: DrupalImageMedia
  su_news_byline?: string
  su_news_components?: DrupalParagraph[]
  su_news_dek?: string
  su_news_featured_media?: DrupalMedia
  su_news_source?: DrupalLink
  su_news_topics?: DrupalTaxonomyTerm[]
  su_shared_tags?: DrupalTaxonomyTerm[]
}

interface Person extends DrupalNode {
  body?: DrupalWysiwyg
  su_person_academic_appt?: string
  su_person_admin_appts?: string
  su_person_affiliations?: DrupalLink[]
  su_person_components?: DrupalParagraph[]
  su_person_education?: string
  su_person_email?: string
  su_person_fax?: string
  su_person_first_name?: string
  su_person_full_title?: string
  su_person_last_name?: string
  su_person_links?: DrupalLink[]
  su_person_location_address?: DrupalWysiwyg
  su_person_location_name?: string
  su_person_mail_code?: string
  su_person_map_url?: DrupalLink
  su_person_mobile_phone?: string
  su_person_photo?: DrupalImageMedia
  su_person_profile_link?: DrupalLink
  su_person_research?: DrupalWysiwyg
  su_person_research_interests?: string
  su_person_scholarly_interests?: DrupalWysiwyg
  su_person_short_title?: string
  su_person_telephone?: string
  su_person_type_group?: DrupalTaxonomyTerm[]
  su_shared_tags?: DrupalTaxonomyTerm[]
  su_person_address?: DrupalWysiwyg
}

interface Publication extends DrupalNode {
}

// Paragraph Types.
interface BannerParagraph extends DrupalParagraph {
  su_banner_body?: DrupalWysiwyg
  su_banner_button?: DrupalLink
  su_banner_header?: string
  su_banner_image?: DrupalMedia
  su_banner_sup_header?: string
  behavior_settings?: {
    hero_pattern?: {
      overlay_position?: string
    }
  }
}

interface CardParagraph extends DrupalParagraph {
  su_card_body?: DrupalWysiwyg
  su_card_header?: string
  su_card_link?: DrupalLink
  su_card_link_display?: string
  su_card_media?: DrupalImageMedia | DrupalVideoMedia
  su_card_super_header?: string
  behavior_settings?: object
}

interface ImageGalleryParagraph extends DrupalParagraph {
  su_gallery_button?: DrupalLink
  su_gallery_description?: DrupalWysiwyg
  su_gallery_headline?: string
  su_gallery_images: DrupalGalleryImageMedia[]
  behavior_settings?: object
}

interface ListParagraph extends DrupalParagraph {
  su_list_button?: DrupalLink
  su_list_description?: DrupalWysiwyg
  su_list_headline?: string
  su_list_view: {
    id: string
    resourceIdObjMeta: {
      display_id: string
      drupal_internal__target_id: string
      arguments?: string
      items_to_display?: number
    }
  }
  behavior_settings?: object
}

interface EntityTeaserParagraph extends DrupalParagraph {
  su_entity_button?: DrupalLink
  su_entity_description?: DrupalWysiwyg
  su_entity_headline?: string
  su_entity_item?: DrupalNode[]
}

interface MediaCaptionParagraph extends DrupalParagraph {
  su_media_caption_caption?: DrupalWysiwyg
  su_media_caption_link?: DrupalLink
  su_media_caption_media?: DrupalMedia
  behavior_settings?: object
}

interface TeaserParagraph extends DrupalParagraph {
  su_entity_button?: DrupalLink
  su_entity_description?: DrupalWysiwyg
  su_entity_headline?: string
  su_entity_item?: DrupalNode[]
  behavior_settings?: object
}

interface WysiwygParagraph extends DrupalParagraph {
  su_wysiwyg_text?: DrupalWysiwyg
  behavior_settings?: object
}

// Media Types.
interface DrupalImageMedia extends DrupalMedia {
  field_media_image: DrupalFile
}

interface DrupalVideoMedia extends DrupalMedia {
  field_media_oembed_video: string
}

interface DrupalFileMedia extends DrupalMedia {
  field_media_file: DrupalFile
}

interface DrupalGalleryImageMedia extends DrupalMedia {
  su_gallery_image: DrupalFile
  su_gallery_caption?: string
}

// Field Structures.
interface DrupalWysiwyg {
  value: string;
  format: string
  processed: string;
  summary?: string;
}

interface DrupalLink {
  uri: string;
  url: string
  title: string
  options: object
}

interface DrupalSmartDate {
  value: string
  end_value: string
  duration: string
}

interface DrupalAddress {
  organization: string
  address_line1: string
  address_line2: string
  locality: string
  postal_code: string
  administrative_area: string
}

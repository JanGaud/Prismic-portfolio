// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

interface FooterDocumentData {}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<FooterDocumentData>,
	'footer',
	Lang
>;

/**
 * Item in *Nav → Brand*
 */
export interface NavDocumentDataBrandItem {
	/**
	 * Logo field in *Nav → Brand*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav.brand[].logo
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	logo: prismic.ImageField<never>;

	/**
	 * Brand Link field in *Nav → Brand*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav.brand[].brand_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	brand_link: prismic.LinkField;
}

/**
 * Item in *Nav → Links*
 */
export interface NavDocumentDataLinksItem {
	/**
	 * Link field in *Nav → Links*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav.links[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * Label field in *Nav → Links*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav.links[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;
}

/**
 * Content for Nav documents
 */
interface NavDocumentData {
	/**
	 * Brand field in *Nav*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav.brand[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	brand: prismic.GroupField<Simplify<NavDocumentDataBrandItem>>;

	/**
	 * Links field in *Nav*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav.links[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	links: prismic.GroupField<Simplify<NavDocumentDataLinksItem>>;
}

/**
 * Nav document from Prismic
 *
 * - **API ID**: `nav`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<NavDocumentData>,
	'nav',
	Lang
>;

type PageDocumentDataSlicesSlice =
	| MusicPorfolioSlice
	| PublicityBannerSlice
	| AboutSlice
	| QuickLinksSlice
	| ArticlesSlice
	| HeaderSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

export type AllDocumentTypes = FooterDocument | NavDocument | PageDocument;

/**
 * Primary content in *About → Primary*
 */
export interface AboutSliceDefaultPrimary {
	/**
	 * About_Title field in *About → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.primary.about_title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	about_title: prismic.TitleField;

	/**
	 * About_SubTitle field in *About → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.primary.about_subtitle
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	about_subtitle: prismic.TitleField;

	/**
	 * About_Img field in *About → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.primary.about_img
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	about_img: prismic.ImageField<never>;
}

/**
 * Primary content in *About → Items*
 */
export interface AboutSliceDefaultItem {
	/**
	 * About_Text field in *About → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.items[].about_text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	about_text: prismic.RichTextField;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<AboutSliceDefaultPrimary>,
	Simplify<AboutSliceDefaultItem>
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<'about', AboutSliceVariation>;

/**
 * Primary content in *Articles → Items*
 */
export interface ArticlesSliceDefaultItem {
	/**
	 * ArticleImg field in *Articles → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: articles.items[].articleimg
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	articleimg: prismic.ImageField<never>;

	/**
	 * ArticleTitle field in *Articles → Items*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: articles.items[].articletitle
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	articletitle: prismic.TitleField;

	/**
	 * ArticleText field in *Articles → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: articles.items[].articletext
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	articletext: prismic.RichTextField;

	/**
	 * ArticleDate field in *Articles → Items*
	 *
	 * - **Field Type**: Timestamp
	 * - **Placeholder**: *None*
	 * - **API ID Path**: articles.items[].articledate
	 * - **Documentation**: https://prismic.io/docs/field#timestamp
	 */
	articledate: prismic.TimestampField;
}

/**
 * Default variation for Articles Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticlesSliceDefault = prismic.SharedSliceVariation<
	'default',
	Record<string, never>,
	Simplify<ArticlesSliceDefaultItem>
>;

/**
 * Slice variation for *Articles*
 */
type ArticlesSliceVariation = ArticlesSliceDefault;

/**
 * Articles Shared Slice
 *
 * - **API ID**: `articles`
 * - **Description**: Articles
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticlesSlice = prismic.SharedSlice<'articles', ArticlesSliceVariation>;

/**
 * Primary content in *Header → Primary*
 */
export interface HeaderSliceDefaultPrimary {
	/**
	 * Title field in *Header → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: header.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField;

	/**
	 * SubTitle field in *Header → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: header.primary.subtitle
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	subtitle: prismic.RichTextField;

	/**
	 * HeaderImg field in *Header → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: header.primary.headerimg
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	headerimg: prismic.ImageField<never>;

	/**
	 * HeaderLink field in *Header → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: header.primary.headerlink
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	headerlink: prismic.LinkField;
}

/**
 * Default variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeaderSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Header*
 */
type HeaderSliceVariation = HeaderSliceDefault;

/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: Header
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSlice = prismic.SharedSlice<'header', HeaderSliceVariation>;

/**
 * Primary content in *MusicPorfolio → Primary*
 */
export interface MusicPorfolioSliceDefaultPrimary {
	/**
	 * Bg_Img field in *MusicPorfolio → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: music_porfolio.primary.bg_img
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	bg_img: prismic.ImageField<never>;

	/**
	 * Big_Title field in *MusicPorfolio → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: music_porfolio.primary.big_title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	big_title: prismic.TitleField;

	/**
	 * Last_update field in *MusicPorfolio → Primary*
	 *
	 * - **Field Type**: Timestamp
	 * - **Placeholder**: *None*
	 * - **API ID Path**: music_porfolio.primary.last_update
	 * - **Documentation**: https://prismic.io/docs/field#timestamp
	 */
	last_update: prismic.TimestampField;

	/**
	 * Spy_Id field in *MusicPorfolio → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: music_porfolio.primary.spy_id
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	spy_id: prismic.KeyTextField;
}

/**
 * Primary content in *MusicPorfolio → Items*
 */
export interface MusicPorfolioSliceDefaultItem {
	/**
	 * Playlist field in *MusicPorfolio → Items*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: music_porfolio.items[].playlist
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	playlist: prismic.BooleanField;

	/**
	 * Soundcloud_Url field in *MusicPorfolio → Items*
	 *
	 * - **Field Type**: Embed
	 * - **Placeholder**: *None*
	 * - **API ID Path**: music_porfolio.items[].soundcloud_url
	 * - **Documentation**: https://prismic.io/docs/field#embed
	 */
	soundcloud_url: prismic.EmbedField;
}

/**
 * Default variation for MusicPorfolio Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MusicPorfolioSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<MusicPorfolioSliceDefaultPrimary>,
	Simplify<MusicPorfolioSliceDefaultItem>
>;

/**
 * Slice variation for *MusicPorfolio*
 */
type MusicPorfolioSliceVariation = MusicPorfolioSliceDefault;

/**
 * MusicPorfolio Shared Slice
 *
 * - **API ID**: `music_porfolio`
 * - **Description**: MusicPorfolio
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MusicPorfolioSlice = prismic.SharedSlice<'music_porfolio', MusicPorfolioSliceVariation>;

/**
 * Primary content in *PublicityBanner → Items*
 */
export interface PublicityBannerSliceDefaultItem {
	/**
	 * Logo field in *PublicityBanner → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: publicity_banner.items[].logo
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	logo: prismic.ImageField<never>;

	/**
	 * Short_Description field in *PublicityBanner → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: publicity_banner.items[].short_description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	short_description: prismic.RichTextField;

	/**
	 * Event_Date field in *PublicityBanner → Items*
	 *
	 * - **Field Type**: Date
	 * - **Placeholder**: *None*
	 * - **API ID Path**: publicity_banner.items[].event_date
	 * - **Documentation**: https://prismic.io/docs/field#date
	 */
	event_date: prismic.DateField;

	/**
	 * Link field in *PublicityBanner → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: publicity_banner.items[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Default variation for PublicityBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PublicityBannerSliceDefault = prismic.SharedSliceVariation<
	'default',
	Record<string, never>,
	Simplify<PublicityBannerSliceDefaultItem>
>;

/**
 * Slice variation for *PublicityBanner*
 */
type PublicityBannerSliceVariation = PublicityBannerSliceDefault;

/**
 * PublicityBanner Shared Slice
 *
 * - **API ID**: `publicity_banner`
 * - **Description**: PublicityBanner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PublicityBannerSlice = prismic.SharedSlice<
	'publicity_banner',
	PublicityBannerSliceVariation
>;

/**
 * Primary content in *QuickLinks → Items*
 */
export interface QuickLinksSliceDefaultItem {
	/**
	 * Link_Name field in *QuickLinks → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: quick_links.items[].link_name
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	link_name: prismic.RichTextField;

	/**
	 * Link field in *QuickLinks → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: quick_links.items[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Default variation for QuickLinks Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuickLinksSliceDefault = prismic.SharedSliceVariation<
	'default',
	Record<string, never>,
	Simplify<QuickLinksSliceDefaultItem>
>;

/**
 * Slice variation for *QuickLinks*
 */
type QuickLinksSliceVariation = QuickLinksSliceDefault;

/**
 * QuickLinks Shared Slice
 *
 * - **API ID**: `quick_links`
 * - **Description**: QuickLinks
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuickLinksSlice = prismic.SharedSlice<'quick_links', QuickLinksSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			FooterDocument,
			FooterDocumentData,
			NavDocument,
			NavDocumentData,
			NavDocumentDataBrandItem,
			NavDocumentDataLinksItem,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			AllDocumentTypes,
			AboutSlice,
			AboutSliceDefaultPrimary,
			AboutSliceDefaultItem,
			AboutSliceVariation,
			AboutSliceDefault,
			ArticlesSlice,
			ArticlesSliceDefaultItem,
			ArticlesSliceVariation,
			ArticlesSliceDefault,
			HeaderSlice,
			HeaderSliceDefaultPrimary,
			HeaderSliceVariation,
			HeaderSliceDefault,
			MusicPorfolioSlice,
			MusicPorfolioSliceDefaultPrimary,
			MusicPorfolioSliceDefaultItem,
			MusicPorfolioSliceVariation,
			MusicPorfolioSliceDefault,
			PublicityBannerSlice,
			PublicityBannerSliceDefaultItem,
			PublicityBannerSliceVariation,
			PublicityBannerSliceDefault,
			QuickLinksSlice,
			QuickLinksSliceDefaultItem,
			QuickLinksSliceVariation,
			QuickLinksSliceDefault
		};
	}
}

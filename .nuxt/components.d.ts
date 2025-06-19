
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AboutCompany': typeof import("../components/AboutCompany.vue")['default']
    'AboutCompanyTwo': typeof import("../components/AboutCompanyTwo.vue")['default']
    'AboutDelivery': typeof import("../components/AboutDelivery.vue")['default']
    'AccordionOne': typeof import("../components/AccordionOne.vue")['default']
    'AccordionTwo': typeof import("../components/AccordionTwo.vue")['default']
    'AppointmentForm': typeof import("../components/AppointmentForm.vue")['default']
    'BlogSidebar': typeof import("../components/BlogSidebar.vue")['default']
    'BrandLogoCarousel': typeof import("../components/BrandLogoCarousel.vue")['default']
    'Breadcrumbs': typeof import("../components/Breadcrumbs.vue")['default']
    'CaseStudiesItem': typeof import("../components/CaseStudiesItem.vue")['default']
    'ContactUsInfo': typeof import("../components/ContactUsInfo.vue")['default']
    'CtaContact': typeof import("../components/CtaContact.vue")['default']
    'CtaContactTwo': typeof import("../components/CtaContactTwo.vue")['default']
    'CtaFour': typeof import("../components/CtaFour.vue")['default']
    'CtaOne': typeof import("../components/CtaOne.vue")['default']
    'CtaThree': typeof import("../components/CtaThree.vue")['default']
    'CtaTwo': typeof import("../components/CtaTwo.vue")['default']
    'CtaVideo': typeof import("../components/CtaVideo.vue")['default']
    'FeatureItem': typeof import("../components/FeatureItem.vue")['default']
    'FeatureItemStyleThree': typeof import("../components/FeatureItemStyleThree.vue")['default']
    'FeatureItemTwo': typeof import("../components/FeatureItemTwo.vue")['default']
    'Footer': typeof import("../components/Footer.vue")['default']
    'FooterAbout': typeof import("../components/FooterAbout.vue")['default']
    'FooterWidgetApps': typeof import("../components/FooterWidgetApps.vue")['default']
    'FooterWidgetLink': typeof import("../components/FooterWidgetLink.vue")['default']
    'FunFact': typeof import("../components/FunFact.vue")['default']
    'FunFactFour': typeof import("../components/FunFactFour.vue")['default']
    'FunFactThree': typeof import("../components/FunFactThree.vue")['default']
    'FunFactTwo': typeof import("../components/FunFactTwo.vue")['default']
    'Header': typeof import("../components/Header.vue")['default']
    'HeaderAppointment': typeof import("../components/HeaderAppointment.vue")['default']
    'HeaderCybersecurity': typeof import("../components/HeaderCybersecurity.vue")['default']
    'HeaderProcessing': typeof import("../components/HeaderProcessing.vue")['default']
    'HeaderResolution': typeof import("../components/HeaderResolution.vue")['default']
    'HeaderTop': typeof import("../components/HeaderTop.vue")['default']
    'HeaderTwo': typeof import("../components/HeaderTwo.vue")['default']
    'HeroAppointment': typeof import("../components/HeroAppointment.vue")['default']
    'HeroCybersecurity': typeof import("../components/HeroCybersecurity.vue")['default']
    'HeroInfotechNo': typeof import("../components/HeroInfotechNo.vue")['default']
    'HeroModernItCompany': typeof import("../components/HeroModernItCompany.vue")['default']
    'HeroProcessing': typeof import("../components/HeroProcessing.vue")['default']
    'HeroResolution': typeof import("../components/HeroResolution.vue")['default']
    'HeroService': typeof import("../components/HeroService.vue")['default']
    'MobileNavMenu': typeof import("../components/MobileNavMenu.vue")['default']
    'Navigation': typeof import("../components/Navigation.vue")['default']
    'NavigationTwo': typeof import("../components/NavigationTwo.vue")['default']
    'OffCanvasMobileMenu': typeof import("../components/OffCanvasMobileMenu.vue")['default']
    'PageHeader': typeof import("../components/PageHeader.vue")['default']
    'PreviewMobileNavMenu': typeof import("../components/PreviewMobileNavMenu.vue")['default']
    'PreviewOffcanvasMobileMenu': typeof import("../components/PreviewOffcanvasMobileMenu.vue")['default']
    'QualifiedMethod': typeof import("../components/QualifiedMethod.vue")['default']
    'SearchOverlay': typeof import("../components/SearchOverlay.vue")['default']
    'SectionTitle': typeof import("../components/SectionTitle.vue")['default']
    'ServiceIT': typeof import("../components/ServiceIT.vue")['default']
    'ServiceItem': typeof import("../components/ServiceItem.vue")['default']
    'ServiceItemStyleFive': typeof import("../components/ServiceItemStyleFive.vue")['default']
    'ServiceItemStyleFour': typeof import("../components/ServiceItemStyleFour.vue")['default']
    'ServiceItemStyleThree': typeof import("../components/ServiceItemStyleThree.vue")['default']
    'ServiceItemStyleTwo': typeof import("../components/ServiceItemStyleTwo.vue")['default']
    'ServiceOne': typeof import("../components/ServiceOne.vue")['default']
    'TeamMember': typeof import("../components/TeamMember.vue")['default']
    'VideoPupupOne': typeof import("../components/VideoPupupOne.vue")['default']
    'VideoWithImages': typeof import("../components/VideoWithImages.vue")['default']
    'SectionsAccordionWrapper': typeof import("../components/sections/AccordionWrapper.vue")['default']
    'SectionsBlogPageWrapper': typeof import("../components/sections/BlogPageWrapper.vue")['default']
    'SectionsBlogStyleOne': typeof import("../components/sections/BlogStyleOne.vue")['default']
    'SectionsBlogStyleTwo': typeof import("../components/sections/BlogStyleTwo.vue")['default']
    'SectionsCaseStudiesItemWrapper': typeof import("../components/sections/CaseStudiesItemWrapper.vue")['default']
    'SectionsCaseStudiesSection': typeof import("../components/sections/CaseStudiesSection.vue")['default']
    'SectionsCaseStudiesSectionTwo': typeof import("../components/sections/CaseStudiesSectionTwo.vue")['default']
    'SectionsClaimContent': typeof import("../components/sections/ClaimContent.vue")['default']
    'SectionsCompanyHistory': typeof import("../components/sections/CompanyHistory.vue")['default']
    'SectionsContactUs': typeof import("../components/sections/ContactUs.vue")['default']
    'SectionsContactUsFour': typeof import("../components/sections/ContactUsFour.vue")['default']
    'SectionsContactUsThree': typeof import("../components/sections/ContactUsThree.vue")['default']
    'SectionsContactUsTwo': typeof import("../components/sections/ContactUsTwo.vue")['default']
    'SectionsFeatureGallery': typeof import("../components/sections/FeatureGallery.vue")['default']
    'SectionsFeatureGalleryFour': typeof import("../components/sections/FeatureGalleryFour.vue")['default']
    'SectionsFeatureGalleryThree': typeof import("../components/sections/FeatureGalleryThree.vue")['default']
    'SectionsFeatureGalleryTwo': typeof import("../components/sections/FeatureGalleryTwo.vue")['default']
    'SectionsFourSteps': typeof import("../components/sections/FourSteps.vue")['default']
    'SectionsGalleryOne': typeof import("../components/sections/GalleryOne.vue")['default']
    'SectionsInfoTechExperience': typeof import("../components/sections/InfoTechExperience.vue")['default']
    'SectionsPricingOne': typeof import("../components/sections/PricingOne.vue")['default']
    'SectionsProjectGallery': typeof import("../components/sections/ProjectGallery.vue")['default']
    'SectionsServiceITSolution': typeof import("../components/sections/ServiceITSolution.vue")['default']
    'SectionsServiceStyleEight': typeof import("../components/sections/ServiceStyleEight.vue")['default']
    'SectionsServiceStyleFive': typeof import("../components/sections/ServiceStyleFive.vue")['default']
    'SectionsServiceStyleSeven': typeof import("../components/sections/ServiceStyleSeven.vue")['default']
    'SectionsServiceStyleSix': typeof import("../components/sections/ServiceStyleSix.vue")['default']
    'SectionsServiceStyleThree': typeof import("../components/sections/ServiceStyleThree.vue")['default']
    'SectionsServiceStyleTwo': typeof import("../components/sections/ServiceStyleTwo.vue")['default']
    'SectionsTabSection': typeof import("../components/sections/TabSection.vue")['default']
    'SectionsTeamMemberList': typeof import("../components/sections/TeamMemberList.vue")['default']
    'SectionsTeamOne': typeof import("../components/sections/TeamOne.vue")['default']
    'SectionsTeamTwo': typeof import("../components/sections/TeamTwo.vue")['default']
    'SectionsTestimonialOne': typeof import("../components/sections/TestimonialOne.vue")['default']
    'SectionsTestimonialTwo': typeof import("../components/sections/TestimonialTwo.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAboutCompany': LazyComponent<typeof import("../components/AboutCompany.vue")['default']>
    'LazyAboutCompanyTwo': LazyComponent<typeof import("../components/AboutCompanyTwo.vue")['default']>
    'LazyAboutDelivery': LazyComponent<typeof import("../components/AboutDelivery.vue")['default']>
    'LazyAccordionOne': LazyComponent<typeof import("../components/AccordionOne.vue")['default']>
    'LazyAccordionTwo': LazyComponent<typeof import("../components/AccordionTwo.vue")['default']>
    'LazyAppointmentForm': LazyComponent<typeof import("../components/AppointmentForm.vue")['default']>
    'LazyBlogSidebar': LazyComponent<typeof import("../components/BlogSidebar.vue")['default']>
    'LazyBrandLogoCarousel': LazyComponent<typeof import("../components/BrandLogoCarousel.vue")['default']>
    'LazyBreadcrumbs': LazyComponent<typeof import("../components/Breadcrumbs.vue")['default']>
    'LazyCaseStudiesItem': LazyComponent<typeof import("../components/CaseStudiesItem.vue")['default']>
    'LazyContactUsInfo': LazyComponent<typeof import("../components/ContactUsInfo.vue")['default']>
    'LazyCtaContact': LazyComponent<typeof import("../components/CtaContact.vue")['default']>
    'LazyCtaContactTwo': LazyComponent<typeof import("../components/CtaContactTwo.vue")['default']>
    'LazyCtaFour': LazyComponent<typeof import("../components/CtaFour.vue")['default']>
    'LazyCtaOne': LazyComponent<typeof import("../components/CtaOne.vue")['default']>
    'LazyCtaThree': LazyComponent<typeof import("../components/CtaThree.vue")['default']>
    'LazyCtaTwo': LazyComponent<typeof import("../components/CtaTwo.vue")['default']>
    'LazyCtaVideo': LazyComponent<typeof import("../components/CtaVideo.vue")['default']>
    'LazyFeatureItem': LazyComponent<typeof import("../components/FeatureItem.vue")['default']>
    'LazyFeatureItemStyleThree': LazyComponent<typeof import("../components/FeatureItemStyleThree.vue")['default']>
    'LazyFeatureItemTwo': LazyComponent<typeof import("../components/FeatureItemTwo.vue")['default']>
    'LazyFooter': LazyComponent<typeof import("../components/Footer.vue")['default']>
    'LazyFooterAbout': LazyComponent<typeof import("../components/FooterAbout.vue")['default']>
    'LazyFooterWidgetApps': LazyComponent<typeof import("../components/FooterWidgetApps.vue")['default']>
    'LazyFooterWidgetLink': LazyComponent<typeof import("../components/FooterWidgetLink.vue")['default']>
    'LazyFunFact': LazyComponent<typeof import("../components/FunFact.vue")['default']>
    'LazyFunFactFour': LazyComponent<typeof import("../components/FunFactFour.vue")['default']>
    'LazyFunFactThree': LazyComponent<typeof import("../components/FunFactThree.vue")['default']>
    'LazyFunFactTwo': LazyComponent<typeof import("../components/FunFactTwo.vue")['default']>
    'LazyHeader': LazyComponent<typeof import("../components/Header.vue")['default']>
    'LazyHeaderAppointment': LazyComponent<typeof import("../components/HeaderAppointment.vue")['default']>
    'LazyHeaderCybersecurity': LazyComponent<typeof import("../components/HeaderCybersecurity.vue")['default']>
    'LazyHeaderProcessing': LazyComponent<typeof import("../components/HeaderProcessing.vue")['default']>
    'LazyHeaderResolution': LazyComponent<typeof import("../components/HeaderResolution.vue")['default']>
    'LazyHeaderTop': LazyComponent<typeof import("../components/HeaderTop.vue")['default']>
    'LazyHeaderTwo': LazyComponent<typeof import("../components/HeaderTwo.vue")['default']>
    'LazyHeroAppointment': LazyComponent<typeof import("../components/HeroAppointment.vue")['default']>
    'LazyHeroCybersecurity': LazyComponent<typeof import("../components/HeroCybersecurity.vue")['default']>
    'LazyHeroInfotechNo': LazyComponent<typeof import("../components/HeroInfotechNo.vue")['default']>
    'LazyHeroModernItCompany': LazyComponent<typeof import("../components/HeroModernItCompany.vue")['default']>
    'LazyHeroProcessing': LazyComponent<typeof import("../components/HeroProcessing.vue")['default']>
    'LazyHeroResolution': LazyComponent<typeof import("../components/HeroResolution.vue")['default']>
    'LazyHeroService': LazyComponent<typeof import("../components/HeroService.vue")['default']>
    'LazyMobileNavMenu': LazyComponent<typeof import("../components/MobileNavMenu.vue")['default']>
    'LazyNavigation': LazyComponent<typeof import("../components/Navigation.vue")['default']>
    'LazyNavigationTwo': LazyComponent<typeof import("../components/NavigationTwo.vue")['default']>
    'LazyOffCanvasMobileMenu': LazyComponent<typeof import("../components/OffCanvasMobileMenu.vue")['default']>
    'LazyPageHeader': LazyComponent<typeof import("../components/PageHeader.vue")['default']>
    'LazyPreviewMobileNavMenu': LazyComponent<typeof import("../components/PreviewMobileNavMenu.vue")['default']>
    'LazyPreviewOffcanvasMobileMenu': LazyComponent<typeof import("../components/PreviewOffcanvasMobileMenu.vue")['default']>
    'LazyQualifiedMethod': LazyComponent<typeof import("../components/QualifiedMethod.vue")['default']>
    'LazySearchOverlay': LazyComponent<typeof import("../components/SearchOverlay.vue")['default']>
    'LazySectionTitle': LazyComponent<typeof import("../components/SectionTitle.vue")['default']>
    'LazyServiceIT': LazyComponent<typeof import("../components/ServiceIT.vue")['default']>
    'LazyServiceItem': LazyComponent<typeof import("../components/ServiceItem.vue")['default']>
    'LazyServiceItemStyleFive': LazyComponent<typeof import("../components/ServiceItemStyleFive.vue")['default']>
    'LazyServiceItemStyleFour': LazyComponent<typeof import("../components/ServiceItemStyleFour.vue")['default']>
    'LazyServiceItemStyleThree': LazyComponent<typeof import("../components/ServiceItemStyleThree.vue")['default']>
    'LazyServiceItemStyleTwo': LazyComponent<typeof import("../components/ServiceItemStyleTwo.vue")['default']>
    'LazyServiceOne': LazyComponent<typeof import("../components/ServiceOne.vue")['default']>
    'LazyTeamMember': LazyComponent<typeof import("../components/TeamMember.vue")['default']>
    'LazyVideoPupupOne': LazyComponent<typeof import("../components/VideoPupupOne.vue")['default']>
    'LazyVideoWithImages': LazyComponent<typeof import("../components/VideoWithImages.vue")['default']>
    'LazySectionsAccordionWrapper': LazyComponent<typeof import("../components/sections/AccordionWrapper.vue")['default']>
    'LazySectionsBlogPageWrapper': LazyComponent<typeof import("../components/sections/BlogPageWrapper.vue")['default']>
    'LazySectionsBlogStyleOne': LazyComponent<typeof import("../components/sections/BlogStyleOne.vue")['default']>
    'LazySectionsBlogStyleTwo': LazyComponent<typeof import("../components/sections/BlogStyleTwo.vue")['default']>
    'LazySectionsCaseStudiesItemWrapper': LazyComponent<typeof import("../components/sections/CaseStudiesItemWrapper.vue")['default']>
    'LazySectionsCaseStudiesSection': LazyComponent<typeof import("../components/sections/CaseStudiesSection.vue")['default']>
    'LazySectionsCaseStudiesSectionTwo': LazyComponent<typeof import("../components/sections/CaseStudiesSectionTwo.vue")['default']>
    'LazySectionsClaimContent': LazyComponent<typeof import("../components/sections/ClaimContent.vue")['default']>
    'LazySectionsCompanyHistory': LazyComponent<typeof import("../components/sections/CompanyHistory.vue")['default']>
    'LazySectionsContactUs': LazyComponent<typeof import("../components/sections/ContactUs.vue")['default']>
    'LazySectionsContactUsFour': LazyComponent<typeof import("../components/sections/ContactUsFour.vue")['default']>
    'LazySectionsContactUsThree': LazyComponent<typeof import("../components/sections/ContactUsThree.vue")['default']>
    'LazySectionsContactUsTwo': LazyComponent<typeof import("../components/sections/ContactUsTwo.vue")['default']>
    'LazySectionsFeatureGallery': LazyComponent<typeof import("../components/sections/FeatureGallery.vue")['default']>
    'LazySectionsFeatureGalleryFour': LazyComponent<typeof import("../components/sections/FeatureGalleryFour.vue")['default']>
    'LazySectionsFeatureGalleryThree': LazyComponent<typeof import("../components/sections/FeatureGalleryThree.vue")['default']>
    'LazySectionsFeatureGalleryTwo': LazyComponent<typeof import("../components/sections/FeatureGalleryTwo.vue")['default']>
    'LazySectionsFourSteps': LazyComponent<typeof import("../components/sections/FourSteps.vue")['default']>
    'LazySectionsGalleryOne': LazyComponent<typeof import("../components/sections/GalleryOne.vue")['default']>
    'LazySectionsInfoTechExperience': LazyComponent<typeof import("../components/sections/InfoTechExperience.vue")['default']>
    'LazySectionsPricingOne': LazyComponent<typeof import("../components/sections/PricingOne.vue")['default']>
    'LazySectionsProjectGallery': LazyComponent<typeof import("../components/sections/ProjectGallery.vue")['default']>
    'LazySectionsServiceITSolution': LazyComponent<typeof import("../components/sections/ServiceITSolution.vue")['default']>
    'LazySectionsServiceStyleEight': LazyComponent<typeof import("../components/sections/ServiceStyleEight.vue")['default']>
    'LazySectionsServiceStyleFive': LazyComponent<typeof import("../components/sections/ServiceStyleFive.vue")['default']>
    'LazySectionsServiceStyleSeven': LazyComponent<typeof import("../components/sections/ServiceStyleSeven.vue")['default']>
    'LazySectionsServiceStyleSix': LazyComponent<typeof import("../components/sections/ServiceStyleSix.vue")['default']>
    'LazySectionsServiceStyleThree': LazyComponent<typeof import("../components/sections/ServiceStyleThree.vue")['default']>
    'LazySectionsServiceStyleTwo': LazyComponent<typeof import("../components/sections/ServiceStyleTwo.vue")['default']>
    'LazySectionsTabSection': LazyComponent<typeof import("../components/sections/TabSection.vue")['default']>
    'LazySectionsTeamMemberList': LazyComponent<typeof import("../components/sections/TeamMemberList.vue")['default']>
    'LazySectionsTeamOne': LazyComponent<typeof import("../components/sections/TeamOne.vue")['default']>
    'LazySectionsTeamTwo': LazyComponent<typeof import("../components/sections/TeamTwo.vue")['default']>
    'LazySectionsTestimonialOne': LazyComponent<typeof import("../components/sections/TestimonialOne.vue")['default']>
    'LazySectionsTestimonialTwo': LazyComponent<typeof import("../components/sections/TestimonialTwo.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AboutCompany: typeof import("../components/AboutCompany.vue")['default']
export const AboutCompanyTwo: typeof import("../components/AboutCompanyTwo.vue")['default']
export const AboutDelivery: typeof import("../components/AboutDelivery.vue")['default']
export const AccordionOne: typeof import("../components/AccordionOne.vue")['default']
export const AccordionTwo: typeof import("../components/AccordionTwo.vue")['default']
export const AppointmentForm: typeof import("../components/AppointmentForm.vue")['default']
export const BlogSidebar: typeof import("../components/BlogSidebar.vue")['default']
export const BrandLogoCarousel: typeof import("../components/BrandLogoCarousel.vue")['default']
export const Breadcrumbs: typeof import("../components/Breadcrumbs.vue")['default']
export const CaseStudiesItem: typeof import("../components/CaseStudiesItem.vue")['default']
export const ContactUsInfo: typeof import("../components/ContactUsInfo.vue")['default']
export const CtaContact: typeof import("../components/CtaContact.vue")['default']
export const CtaContactTwo: typeof import("../components/CtaContactTwo.vue")['default']
export const CtaFour: typeof import("../components/CtaFour.vue")['default']
export const CtaOne: typeof import("../components/CtaOne.vue")['default']
export const CtaThree: typeof import("../components/CtaThree.vue")['default']
export const CtaTwo: typeof import("../components/CtaTwo.vue")['default']
export const CtaVideo: typeof import("../components/CtaVideo.vue")['default']
export const FeatureItem: typeof import("../components/FeatureItem.vue")['default']
export const FeatureItemStyleThree: typeof import("../components/FeatureItemStyleThree.vue")['default']
export const FeatureItemTwo: typeof import("../components/FeatureItemTwo.vue")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const FooterAbout: typeof import("../components/FooterAbout.vue")['default']
export const FooterWidgetApps: typeof import("../components/FooterWidgetApps.vue")['default']
export const FooterWidgetLink: typeof import("../components/FooterWidgetLink.vue")['default']
export const FunFact: typeof import("../components/FunFact.vue")['default']
export const FunFactFour: typeof import("../components/FunFactFour.vue")['default']
export const FunFactThree: typeof import("../components/FunFactThree.vue")['default']
export const FunFactTwo: typeof import("../components/FunFactTwo.vue")['default']
export const Header: typeof import("../components/Header.vue")['default']
export const HeaderAppointment: typeof import("../components/HeaderAppointment.vue")['default']
export const HeaderCybersecurity: typeof import("../components/HeaderCybersecurity.vue")['default']
export const HeaderProcessing: typeof import("../components/HeaderProcessing.vue")['default']
export const HeaderResolution: typeof import("../components/HeaderResolution.vue")['default']
export const HeaderTop: typeof import("../components/HeaderTop.vue")['default']
export const HeaderTwo: typeof import("../components/HeaderTwo.vue")['default']
export const HeroAppointment: typeof import("../components/HeroAppointment.vue")['default']
export const HeroCybersecurity: typeof import("../components/HeroCybersecurity.vue")['default']
export const HeroInfotechNo: typeof import("../components/HeroInfotechNo.vue")['default']
export const HeroModernItCompany: typeof import("../components/HeroModernItCompany.vue")['default']
export const HeroProcessing: typeof import("../components/HeroProcessing.vue")['default']
export const HeroResolution: typeof import("../components/HeroResolution.vue")['default']
export const HeroService: typeof import("../components/HeroService.vue")['default']
export const MobileNavMenu: typeof import("../components/MobileNavMenu.vue")['default']
export const Navigation: typeof import("../components/Navigation.vue")['default']
export const NavigationTwo: typeof import("../components/NavigationTwo.vue")['default']
export const OffCanvasMobileMenu: typeof import("../components/OffCanvasMobileMenu.vue")['default']
export const PageHeader: typeof import("../components/PageHeader.vue")['default']
export const PreviewMobileNavMenu: typeof import("../components/PreviewMobileNavMenu.vue")['default']
export const PreviewOffcanvasMobileMenu: typeof import("../components/PreviewOffcanvasMobileMenu.vue")['default']
export const QualifiedMethod: typeof import("../components/QualifiedMethod.vue")['default']
export const SearchOverlay: typeof import("../components/SearchOverlay.vue")['default']
export const SectionTitle: typeof import("../components/SectionTitle.vue")['default']
export const ServiceIT: typeof import("../components/ServiceIT.vue")['default']
export const ServiceItem: typeof import("../components/ServiceItem.vue")['default']
export const ServiceItemStyleFive: typeof import("../components/ServiceItemStyleFive.vue")['default']
export const ServiceItemStyleFour: typeof import("../components/ServiceItemStyleFour.vue")['default']
export const ServiceItemStyleThree: typeof import("../components/ServiceItemStyleThree.vue")['default']
export const ServiceItemStyleTwo: typeof import("../components/ServiceItemStyleTwo.vue")['default']
export const ServiceOne: typeof import("../components/ServiceOne.vue")['default']
export const TeamMember: typeof import("../components/TeamMember.vue")['default']
export const VideoPupupOne: typeof import("../components/VideoPupupOne.vue")['default']
export const VideoWithImages: typeof import("../components/VideoWithImages.vue")['default']
export const SectionsAccordionWrapper: typeof import("../components/sections/AccordionWrapper.vue")['default']
export const SectionsBlogPageWrapper: typeof import("../components/sections/BlogPageWrapper.vue")['default']
export const SectionsBlogStyleOne: typeof import("../components/sections/BlogStyleOne.vue")['default']
export const SectionsBlogStyleTwo: typeof import("../components/sections/BlogStyleTwo.vue")['default']
export const SectionsCaseStudiesItemWrapper: typeof import("../components/sections/CaseStudiesItemWrapper.vue")['default']
export const SectionsCaseStudiesSection: typeof import("../components/sections/CaseStudiesSection.vue")['default']
export const SectionsCaseStudiesSectionTwo: typeof import("../components/sections/CaseStudiesSectionTwo.vue")['default']
export const SectionsClaimContent: typeof import("../components/sections/ClaimContent.vue")['default']
export const SectionsCompanyHistory: typeof import("../components/sections/CompanyHistory.vue")['default']
export const SectionsContactUs: typeof import("../components/sections/ContactUs.vue")['default']
export const SectionsContactUsFour: typeof import("../components/sections/ContactUsFour.vue")['default']
export const SectionsContactUsThree: typeof import("../components/sections/ContactUsThree.vue")['default']
export const SectionsContactUsTwo: typeof import("../components/sections/ContactUsTwo.vue")['default']
export const SectionsFeatureGallery: typeof import("../components/sections/FeatureGallery.vue")['default']
export const SectionsFeatureGalleryFour: typeof import("../components/sections/FeatureGalleryFour.vue")['default']
export const SectionsFeatureGalleryThree: typeof import("../components/sections/FeatureGalleryThree.vue")['default']
export const SectionsFeatureGalleryTwo: typeof import("../components/sections/FeatureGalleryTwo.vue")['default']
export const SectionsFourSteps: typeof import("../components/sections/FourSteps.vue")['default']
export const SectionsGalleryOne: typeof import("../components/sections/GalleryOne.vue")['default']
export const SectionsInfoTechExperience: typeof import("../components/sections/InfoTechExperience.vue")['default']
export const SectionsPricingOne: typeof import("../components/sections/PricingOne.vue")['default']
export const SectionsProjectGallery: typeof import("../components/sections/ProjectGallery.vue")['default']
export const SectionsServiceITSolution: typeof import("../components/sections/ServiceITSolution.vue")['default']
export const SectionsServiceStyleEight: typeof import("../components/sections/ServiceStyleEight.vue")['default']
export const SectionsServiceStyleFive: typeof import("../components/sections/ServiceStyleFive.vue")['default']
export const SectionsServiceStyleSeven: typeof import("../components/sections/ServiceStyleSeven.vue")['default']
export const SectionsServiceStyleSix: typeof import("../components/sections/ServiceStyleSix.vue")['default']
export const SectionsServiceStyleThree: typeof import("../components/sections/ServiceStyleThree.vue")['default']
export const SectionsServiceStyleTwo: typeof import("../components/sections/ServiceStyleTwo.vue")['default']
export const SectionsTabSection: typeof import("../components/sections/TabSection.vue")['default']
export const SectionsTeamMemberList: typeof import("../components/sections/TeamMemberList.vue")['default']
export const SectionsTeamOne: typeof import("../components/sections/TeamOne.vue")['default']
export const SectionsTeamTwo: typeof import("../components/sections/TeamTwo.vue")['default']
export const SectionsTestimonialOne: typeof import("../components/sections/TestimonialOne.vue")['default']
export const SectionsTestimonialTwo: typeof import("../components/sections/TestimonialTwo.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAboutCompany: LazyComponent<typeof import("../components/AboutCompany.vue")['default']>
export const LazyAboutCompanyTwo: LazyComponent<typeof import("../components/AboutCompanyTwo.vue")['default']>
export const LazyAboutDelivery: LazyComponent<typeof import("../components/AboutDelivery.vue")['default']>
export const LazyAccordionOne: LazyComponent<typeof import("../components/AccordionOne.vue")['default']>
export const LazyAccordionTwo: LazyComponent<typeof import("../components/AccordionTwo.vue")['default']>
export const LazyAppointmentForm: LazyComponent<typeof import("../components/AppointmentForm.vue")['default']>
export const LazyBlogSidebar: LazyComponent<typeof import("../components/BlogSidebar.vue")['default']>
export const LazyBrandLogoCarousel: LazyComponent<typeof import("../components/BrandLogoCarousel.vue")['default']>
export const LazyBreadcrumbs: LazyComponent<typeof import("../components/Breadcrumbs.vue")['default']>
export const LazyCaseStudiesItem: LazyComponent<typeof import("../components/CaseStudiesItem.vue")['default']>
export const LazyContactUsInfo: LazyComponent<typeof import("../components/ContactUsInfo.vue")['default']>
export const LazyCtaContact: LazyComponent<typeof import("../components/CtaContact.vue")['default']>
export const LazyCtaContactTwo: LazyComponent<typeof import("../components/CtaContactTwo.vue")['default']>
export const LazyCtaFour: LazyComponent<typeof import("../components/CtaFour.vue")['default']>
export const LazyCtaOne: LazyComponent<typeof import("../components/CtaOne.vue")['default']>
export const LazyCtaThree: LazyComponent<typeof import("../components/CtaThree.vue")['default']>
export const LazyCtaTwo: LazyComponent<typeof import("../components/CtaTwo.vue")['default']>
export const LazyCtaVideo: LazyComponent<typeof import("../components/CtaVideo.vue")['default']>
export const LazyFeatureItem: LazyComponent<typeof import("../components/FeatureItem.vue")['default']>
export const LazyFeatureItemStyleThree: LazyComponent<typeof import("../components/FeatureItemStyleThree.vue")['default']>
export const LazyFeatureItemTwo: LazyComponent<typeof import("../components/FeatureItemTwo.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue")['default']>
export const LazyFooterAbout: LazyComponent<typeof import("../components/FooterAbout.vue")['default']>
export const LazyFooterWidgetApps: LazyComponent<typeof import("../components/FooterWidgetApps.vue")['default']>
export const LazyFooterWidgetLink: LazyComponent<typeof import("../components/FooterWidgetLink.vue")['default']>
export const LazyFunFact: LazyComponent<typeof import("../components/FunFact.vue")['default']>
export const LazyFunFactFour: LazyComponent<typeof import("../components/FunFactFour.vue")['default']>
export const LazyFunFactThree: LazyComponent<typeof import("../components/FunFactThree.vue")['default']>
export const LazyFunFactTwo: LazyComponent<typeof import("../components/FunFactTwo.vue")['default']>
export const LazyHeader: LazyComponent<typeof import("../components/Header.vue")['default']>
export const LazyHeaderAppointment: LazyComponent<typeof import("../components/HeaderAppointment.vue")['default']>
export const LazyHeaderCybersecurity: LazyComponent<typeof import("../components/HeaderCybersecurity.vue")['default']>
export const LazyHeaderProcessing: LazyComponent<typeof import("../components/HeaderProcessing.vue")['default']>
export const LazyHeaderResolution: LazyComponent<typeof import("../components/HeaderResolution.vue")['default']>
export const LazyHeaderTop: LazyComponent<typeof import("../components/HeaderTop.vue")['default']>
export const LazyHeaderTwo: LazyComponent<typeof import("../components/HeaderTwo.vue")['default']>
export const LazyHeroAppointment: LazyComponent<typeof import("../components/HeroAppointment.vue")['default']>
export const LazyHeroCybersecurity: LazyComponent<typeof import("../components/HeroCybersecurity.vue")['default']>
export const LazyHeroInfotechNo: LazyComponent<typeof import("../components/HeroInfotechNo.vue")['default']>
export const LazyHeroModernItCompany: LazyComponent<typeof import("../components/HeroModernItCompany.vue")['default']>
export const LazyHeroProcessing: LazyComponent<typeof import("../components/HeroProcessing.vue")['default']>
export const LazyHeroResolution: LazyComponent<typeof import("../components/HeroResolution.vue")['default']>
export const LazyHeroService: LazyComponent<typeof import("../components/HeroService.vue")['default']>
export const LazyMobileNavMenu: LazyComponent<typeof import("../components/MobileNavMenu.vue")['default']>
export const LazyNavigation: LazyComponent<typeof import("../components/Navigation.vue")['default']>
export const LazyNavigationTwo: LazyComponent<typeof import("../components/NavigationTwo.vue")['default']>
export const LazyOffCanvasMobileMenu: LazyComponent<typeof import("../components/OffCanvasMobileMenu.vue")['default']>
export const LazyPageHeader: LazyComponent<typeof import("../components/PageHeader.vue")['default']>
export const LazyPreviewMobileNavMenu: LazyComponent<typeof import("../components/PreviewMobileNavMenu.vue")['default']>
export const LazyPreviewOffcanvasMobileMenu: LazyComponent<typeof import("../components/PreviewOffcanvasMobileMenu.vue")['default']>
export const LazyQualifiedMethod: LazyComponent<typeof import("../components/QualifiedMethod.vue")['default']>
export const LazySearchOverlay: LazyComponent<typeof import("../components/SearchOverlay.vue")['default']>
export const LazySectionTitle: LazyComponent<typeof import("../components/SectionTitle.vue")['default']>
export const LazyServiceIT: LazyComponent<typeof import("../components/ServiceIT.vue")['default']>
export const LazyServiceItem: LazyComponent<typeof import("../components/ServiceItem.vue")['default']>
export const LazyServiceItemStyleFive: LazyComponent<typeof import("../components/ServiceItemStyleFive.vue")['default']>
export const LazyServiceItemStyleFour: LazyComponent<typeof import("../components/ServiceItemStyleFour.vue")['default']>
export const LazyServiceItemStyleThree: LazyComponent<typeof import("../components/ServiceItemStyleThree.vue")['default']>
export const LazyServiceItemStyleTwo: LazyComponent<typeof import("../components/ServiceItemStyleTwo.vue")['default']>
export const LazyServiceOne: LazyComponent<typeof import("../components/ServiceOne.vue")['default']>
export const LazyTeamMember: LazyComponent<typeof import("../components/TeamMember.vue")['default']>
export const LazyVideoPupupOne: LazyComponent<typeof import("../components/VideoPupupOne.vue")['default']>
export const LazyVideoWithImages: LazyComponent<typeof import("../components/VideoWithImages.vue")['default']>
export const LazySectionsAccordionWrapper: LazyComponent<typeof import("../components/sections/AccordionWrapper.vue")['default']>
export const LazySectionsBlogPageWrapper: LazyComponent<typeof import("../components/sections/BlogPageWrapper.vue")['default']>
export const LazySectionsBlogStyleOne: LazyComponent<typeof import("../components/sections/BlogStyleOne.vue")['default']>
export const LazySectionsBlogStyleTwo: LazyComponent<typeof import("../components/sections/BlogStyleTwo.vue")['default']>
export const LazySectionsCaseStudiesItemWrapper: LazyComponent<typeof import("../components/sections/CaseStudiesItemWrapper.vue")['default']>
export const LazySectionsCaseStudiesSection: LazyComponent<typeof import("../components/sections/CaseStudiesSection.vue")['default']>
export const LazySectionsCaseStudiesSectionTwo: LazyComponent<typeof import("../components/sections/CaseStudiesSectionTwo.vue")['default']>
export const LazySectionsClaimContent: LazyComponent<typeof import("../components/sections/ClaimContent.vue")['default']>
export const LazySectionsCompanyHistory: LazyComponent<typeof import("../components/sections/CompanyHistory.vue")['default']>
export const LazySectionsContactUs: LazyComponent<typeof import("../components/sections/ContactUs.vue")['default']>
export const LazySectionsContactUsFour: LazyComponent<typeof import("../components/sections/ContactUsFour.vue")['default']>
export const LazySectionsContactUsThree: LazyComponent<typeof import("../components/sections/ContactUsThree.vue")['default']>
export const LazySectionsContactUsTwo: LazyComponent<typeof import("../components/sections/ContactUsTwo.vue")['default']>
export const LazySectionsFeatureGallery: LazyComponent<typeof import("../components/sections/FeatureGallery.vue")['default']>
export const LazySectionsFeatureGalleryFour: LazyComponent<typeof import("../components/sections/FeatureGalleryFour.vue")['default']>
export const LazySectionsFeatureGalleryThree: LazyComponent<typeof import("../components/sections/FeatureGalleryThree.vue")['default']>
export const LazySectionsFeatureGalleryTwo: LazyComponent<typeof import("../components/sections/FeatureGalleryTwo.vue")['default']>
export const LazySectionsFourSteps: LazyComponent<typeof import("../components/sections/FourSteps.vue")['default']>
export const LazySectionsGalleryOne: LazyComponent<typeof import("../components/sections/GalleryOne.vue")['default']>
export const LazySectionsInfoTechExperience: LazyComponent<typeof import("../components/sections/InfoTechExperience.vue")['default']>
export const LazySectionsPricingOne: LazyComponent<typeof import("../components/sections/PricingOne.vue")['default']>
export const LazySectionsProjectGallery: LazyComponent<typeof import("../components/sections/ProjectGallery.vue")['default']>
export const LazySectionsServiceITSolution: LazyComponent<typeof import("../components/sections/ServiceITSolution.vue")['default']>
export const LazySectionsServiceStyleEight: LazyComponent<typeof import("../components/sections/ServiceStyleEight.vue")['default']>
export const LazySectionsServiceStyleFive: LazyComponent<typeof import("../components/sections/ServiceStyleFive.vue")['default']>
export const LazySectionsServiceStyleSeven: LazyComponent<typeof import("../components/sections/ServiceStyleSeven.vue")['default']>
export const LazySectionsServiceStyleSix: LazyComponent<typeof import("../components/sections/ServiceStyleSix.vue")['default']>
export const LazySectionsServiceStyleThree: LazyComponent<typeof import("../components/sections/ServiceStyleThree.vue")['default']>
export const LazySectionsServiceStyleTwo: LazyComponent<typeof import("../components/sections/ServiceStyleTwo.vue")['default']>
export const LazySectionsTabSection: LazyComponent<typeof import("../components/sections/TabSection.vue")['default']>
export const LazySectionsTeamMemberList: LazyComponent<typeof import("../components/sections/TeamMemberList.vue")['default']>
export const LazySectionsTeamOne: LazyComponent<typeof import("../components/sections/TeamOne.vue")['default']>
export const LazySectionsTeamTwo: LazyComponent<typeof import("../components/sections/TeamTwo.vue")['default']>
export const LazySectionsTestimonialOne: LazyComponent<typeof import("../components/sections/TestimonialOne.vue")['default']>
export const LazySectionsTestimonialTwo: LazyComponent<typeof import("../components/sections/TestimonialTwo.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]

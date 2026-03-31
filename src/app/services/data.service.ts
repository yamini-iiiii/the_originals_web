import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  services = [
    {
      name: "MARKETING + COMMUNICATIONS",
      url: "marketing-communications",
      section_id: "section-01"
    },
    {
      name: "EXPERIENCE, TECHNOLOGY + CONSULTING",
      url: "experience-technology-consulting",
      section_id: "section-02"
    },
    {
      name: "MEDIA + SPONSORSHIP",
      url: "media-sponsorship",
      section_id: "section-03"
    },
    {
      name: "SPECIALIST SERVICES",
      url: "specialist-services",
      section_id: "section-04"
    }
  ]

  data = [
    // 01
    {
      page:"marketing-communications",
      id:"01",
      section_id: "section-01",
      heading: "MARKETING + COMMUNICATIONS",
      description: "We don’t just market. We build presence, perception, and pull. Our services are designed to help brands connect deeply, communicate clearly, and convert consistently — across every channel that matters.",
      video_url: "https://videos.ctfassets.net/teibi0nrv2xi/1RZE9z5yNnQIrM5fg7tYNE/f27da9eb7e29f465dd22d5353a464f3d/DeLonghi_Marquee.mp4",
      image_url:"",
      service_types: [
        {
          page: "brand-and-communications",
          title: "Brand and Communications Strategy + Planning",
          url: "/services/marketing-communications/brand-and-communications",
          desc: "<p>We turn brand ambition into clear direction. Whether you're launching, repositioning, or scaling — we define who you are, what you stand for, and how to win in your space.</p><p>From insights to messaging to campaign rollout, our strategies are built to perform in the real world.</p>",
          video_url:"https://videos.ctfassets.net/teibi0nrv2xi/2dakLNYlJbfjC7MNsWkQt2/b8067e7bf34d51ec4730fea5105c0afc/Marketing_Communications.mp4",
          image_url:""
        },
        {
          page: "advertising-content",
          title: "Advertising + Content",
          url: "/services/marketing-communications/advertising-content",
          desc: "<p><b>Big ideas. Scroll-stopping execution.</b></p><p>We craft ad campaigns that cut through noise — across digital, film, and print. From 6-second hooks to cinematic brand films, we create content that connects emotionally and converts commercially.</p>",
          video_url:"https://videos.ctfassets.net/teibi0nrv2xi/1RZE9z5yNnQIrM5fg7tYNE/f27da9eb7e29f465dd22d5353a464f3d/DeLonghi_Marquee.mp4",
          image_url:""
        },
        {
          page: "social-media-creator-marketing",
          title: "Social Media + Creator Marketing",
          url: "/services/marketing-communications/social-media-creator-marketing",
          desc: "<p>We don’t just manage feeds — we build communities.</p><p>Our social media team blends storytelling, trend-hacking, and real-time relevance to keep your brand always-on and always engaging.Add to that creator partnerships that feel natural, not sponsored — and you’ve got influence that actually influences.</p>",
          video_url:"https://videos.ctfassets.net/teibi0nrv2xi/35sufA22JhBy4mzQ2ftHPy/119280bb9255f5e834e98298864f107f/Jameson_Marquee.mp4",
          image_url:""
        },
        {
          page: "pr-communications-reputation",
          title: "PR, Communications + Reputation",
          url: "/services/marketing-communications/pr-communications-reputation",
          desc: "<p>What people say about your brand matters — so we help you shape the story. We build narratives that land in the right places, with the right people — from media outreach to thought leadership and crisis control. Because visibility is good, but credibility is better.</p>",
          video_url:"https://videos.ctfassets.net/teibi0nrv2xi/31zBqKuT0LWu00lW1Nibku/ba091009e540751ef4699cbdc0524df3/Icelandverse_Marquee.mp4",
          image_url:""
        },
        {
          page: "experiential-marketing-events",
          title: "Experiential Marketing + Events",
          url: "/services/marketing-communications/experiential-marketing-events",
          desc: "<p><b>We create moments that move people.</b></p><p>From intimate activations to large-scale brand experiences, we bring your brand to life in the physical world — blending creativity, logistics, and storytelling into unforgettable experiences.</p>",
          video_url:"https://videos.ctfassets.net/teibi0nrv2xi/4HZfUi3jkg7MTjAHuHGSh0/8b98b1f00997dc18b7b030e33ad8a6b0/EE_Marquee.mp4",
          image_url:""
        },
        {
          page: "branding-design",
          title: "Brand Identity & Visual Design",
          url: "/services/marketing-communications/branding-design",
          desc: "<p><b>Unlocking Brand + Design Potential with M+C Saatchi.</b></p><p>Logos, packaging, brand guidelines, campaigns — everything visual is crafted to be instantly recognizable and unmistakably you.</p><p>Good design isn’t decoration — it’s communication. And we make every pixel count</p>",
          video_url:"https://videos.ctfassets.net/teibi0nrv2xi/3GBvtSXnF0wdB5KnfhiPR3/69c1f95e19a979ac4be417379d8a9247/Billboard_Marquee.mp4",
          image_url:""
        },
        {
          page: "production",
          title: "Production – Film, Photo & Digital",
          url: "/services/marketing-communications/production",
          desc: "<p><b>Ideas are only as strong as their execution — and we own the process end-to-end.</b></p><p>From slick shoots to scrappy reels, we create high-quality visuals at any scale. Music videos, UGC-style content, web series, product films — we shoot, edit, animate, and deliver content that’s built to perform on every platform.</p>",
          video_url:"https://videos.ctfassets.net/teibi0nrv2xi/3GBvtSXnF0wdB5KnfhiPR3/69c1f95e19a979ac4be417379d8a9247/Billboard_Marquee.mp4",
          image_url:""
        }
      ],
      explore_work:"/services/marketing-communications"
    },
    // 02
    {
      page:"experience-technology-consulting",
      id:"02",
      section_id: "section-02",
      heading: "EXPERIENCE, TECHNOLOGY + CONSULTING",
      description: "We provide consulting and digital expertise to help brands unlock innovation through technology and experiences.",
      video_url: "https://videos.ctfassets.net/teibi0nrv2xi/3922KlfOKzR9W73ykZAXs4/9d59b3e37b9fbeb832d0d6e73fdee8a9/Experience_v3.mp4",
      image_url:"",
      service_types: [
        {
          page: "audience-insights",
          title: "Audience Definition + Insights",
          url: "/services/experience-technology-consulting/audience-insights",
          desc: "<p>Leveraging our diverse data stack, we create powerful audience understanding - uncovering deep audience behaviors and cultural drivers to identify how to authentically connect with real people for real growth.</p>",
          video_url:"",
          image_url:"https://giggster.com/images/location/07689dd1-d6e5-4a60-bccc-26eee2eb04f3/135d9adf-fb6f-4e16-8e76-e3fe8d816b9f.jpg?width=720&height=514&fit=crop&dpr=1.4&format=webply"
        },
        {
          page: "data-analytics",
          title: "Data, Analytics + Measurement",
          url: "/services/experience-technology-consulting/data-analytics",
          desc: "<p>We don’t just collect data—we make it work. Powered by AI and advanced analytics, we transform raw information into predictive intelligence and real-time measurement that fuels smarter decisions.</p>",
          video_url:"",
          image_url:"https://mirrorpictures.in/wp-content/uploads/2023/03/istockphoto-1165055006-612x612-1.jpg"
        },
        {
          page: "growth-innovation-consulting",
          title: "Growth Strategy, Innovation + Consulting",
          url: "/services/experience-technology-consulting/growth-innovation-consulting",
          desc: "<p>Future-proofing brands with bold strategies, disruptive innovation, and consulting that transforms challenges into opportunities. From uncovering untapped markets to redefining business models, we craft strategies that drive sustainable growth. Whether you’re scaling, pivoting or reinventing, we turn ideas into action that create impact and cultural relevance.</p><p>Let’s build experiences that move culture and drive results. <b>M+C Saatchi Experience, where insight, technology, and strategy fuel growth.</b></p>",
          video_url:"https://videos.ctfassets.net/teibi0nrv2xi/5MprhUsGLq5TRwroL1gfmn/5094df8eab608fa223d07b34fd00c62b/NZ_RUGBY_thumb.mp4",
          image_url:""
        },
        {
          page: "design-loyalty",
          title: "UX, CX Design, CRM + Loyalty",
          url: "/services/experience-technology-consulting/design-loyalty",
          desc: "<p>Seamless, human-centric, and data-driven, we create customer experiences that intuitively connect – both physically and digitally. IRL, online, or across emerging platforms, we design CX ecosystems that entice, convert, and build lasting brand impressions.</p><p>Our full-stack tech capabilities create breakthrough, personalised engagement strategies that don’t just acquire customers—they build lasting relationships and drive brand advocacy.</p>",
          video_url:"https://videos.ctfassets.net/teibi0nrv2xi/4ZuYuUB12DGA3urijJ5quW/8c7f11c813d1424c09634afd80b90315/-7645-4ed8-8db1-bbb33f0b2506.mp4",
          image_url:""
        }
      ],
      explore_work:"/services/experience-technology-consulting"
    },
    // 03
    {
      page:"media-sponsorship",
      id:"03",
      section_id: "section-03",
      heading: "MEDIA + SPONSORSHIP",
      description: "We create powerful media plans and partnerships that maximize impact across all platforms.",
      video_url: "https://videos.ctfassets.net/teibi0nrv2xi/1dsSQbnOKw2BBQJrobkrQB/0ef03890203126fe12f8e58294987261/Media_Sponsorship.mp4",
      image_url:"",
      service_types: [
        {
          page: "performance-media",
          title: "Performance Marketing + Retail Media",
          url: "/services/media-sponsorship/performance-media",
          desc:
              "<p>At a time when every click, view, and conversion matters, performance marketing turns media investments into measurable business growth. As a global digital media agency, we specialise in performance marketing, paid media, and retail media, connecting brands with the right audiences at the right time. Our data-led approach spans paid search & social, programmatic, influencer marketing, streaming platforms, App Store Optimisation, and beyond. With retail and commerce media reshaping the path to purchase, we help brands capitalise on high-intent moments to drive conversions and maximise ROI.</p><p>Our team of specialists operates at the intersection of media, mobile, tech, and creative, ensuring campaigns are optimised at every touchpoint. From precision media buying to measurement, we craft strategies that engage and deliver real business outcomes. Whether it’s eCommerce, fintech, or entertainment, we partner with global brands across industries to launch them in new markets, scale their digital growth, expand their use base, and make them known. With accountability at our core, we navigate the ever-evolving digital landscape so our clients can thrive.<p>",
          video_url:"https://videos.ctfassets.net/teibi0nrv2xi/71gFv73FDlQuLf7UtXnqXZ/2e721d76c5e7e9b3b995c7700519f66f/Suntory_marquee.mp4",
          image_url:""
        },
        {
          page: "sponsorship-partnership",
          title: "Sponsorships, Partnerships + Rights Management",
          url: "/services/media-sponsorship/sponsorship-partnership",
          desc: "<p>We specialise in creating impactful sponsorships, strategic partnerships, and seamless IP management solutions that will drive brand growth and engagement and tailored return on investment. Our expert teams around the world work with clients to identify the right partners, craft authentic collaborations, and maximize the value of investments. We do this across all cultural touchpoints at global, regional and local market levels.</p>",
          video_url:"",
          image_url:""
        }
      ],
      explore_work:"/services/media-sponsorship"
    },
    // 04
    {
      page:"specialist-services",
      id:"04",
      section_id: "section-04",
      heading: "SPECIALIST SERVICES",
      description: "Our specialist teams bring niche expertise to address specific challenges with precision and insight.",
      video_url: "https://videos.ctfassets.net/teibi0nrv2xi/4Uy4NgMx71ZZLKMwPWlDIn/47825c48fd04df2de3a42770e396782c/Talent.mp4",
      image_url:"",
      service_types: [
        {
          page: "talent-management",
          title: "Talent Management",
          url: "/services/specialist-services/talent-management",
          desc:"<p>+C Saatchi Talent is the UK’s leading talent management agency, managing the leading Entertainment & Digital talent in the country.<p><p>We are partners, not agents.</p><p>We nurture a career by managing the talent’s brand and building their reputation.</p><p>Our guiding principle since 2002 is to embody whatever it takes…to build long-term success and prosperity.</p><p>M+C Saatchi Talent’s commitment to excellence is unsurpassed and we are proud to be the only talent management company integrated into a global marketing group.</p><p>We successfully develop and manage the careers of some of the UK’s most established names from Broadcast and social media, to live events and beyond</p>",
          video_url:"https://videos.ctfassets.net/teibi0nrv2xi/1JQ1GWx4PJ9GC1CyAJImd9/e082e67cd427fd5542d1d455dc451e91/Talent_Management.mp4",
          image_url:""
        },
        {
          page: "sports-entertainment",
          title: "Sports + Entertainment",
          url: "/services/specialist-services/sports-entertainment",
          desc: "<p>We connect brands to consumers through the things people love, building cultural power through passions. We have a global team of passion specialists who live and breathe sport and entertainment and are part of the cultures and sub-cultures around, and across, those spaces. The most awarded in the sector, we have panoramic capabilities across Sponsorship & Partnership amplification, PR, Social, Influencer, Experiential and Content Creation, creating fully integrated campaigns for brands in, or wanting to enter, the sport and entertainment spaces.</p>",
          video_url:"https://videos.ctfassets.net/teibi0nrv2xi/35sufA22JhBy4mzQ2ftHPy/119280bb9255f5e834e98298864f107f/Jameson_Marquee.mp4",
          image_url:""
        },
        {
          page: "global-and-social-issues",
          title: "Global + Social Issues",
          url: "/services/specialist-services/global-and-social-issues",
          desc:"<p>We leverage Cultural Power to create communications that drive progress against humanity’s most pressing challenges.</p>We work on the critical issues of our time, including the climate emergency, global health, human rights and freedoms, social justice and The Sustainable Development Goals.</p><p>Our clients include governments, NGOs, multilaterals, foundations, philanthropies and consumer brands. We combine expertise from the commercial communications sector, with deep knowledge of our clients’ sectors to unlock original solutions to long-standing problems</p>",
          video_url:"https://mcsaatchi.com/_next/image?url=https%3A%2F%…5e84be4d8f360aa%2FArchewell_thumb.jpg&w=1920&q=75",
          image_url:""
        }
      ],
      explore_work:"/services/specialist-services"
    }
  ]

  work = [
    // 01
    {
      service_name:"marketing-communications",
      types: [
        "Brand and Communications Strategy + Planning",
        "Advertising + Content",
        "Social Media + Creator Marketing",
        "PR, Communications + Reputation",
        "Experiential Marketing + Events",
        "Brand Identity & Visual Design",
        "Production – Film, Photo & Digital"
      ],
      media :[
        {
          brand: "SAMSONITE",
          title: "An always-on influencer strategy to redefine social presence",
          image: "https://unsplash-assets.imgix.net/marketing/studio/light-guy.jpg?w=800&dpr=2&auto=format&fit=crop&q=60",
        },
        {
          brand: "BULGARI",
          title: "Creating a distinct experience for an iconic luxury brand",
          image: "https://unsplash-assets.imgix.net/marketing/studio/deck/1.jpg?w=336&dpr=2&q=80&h=441&auto=format&fit=crop",
        },
        {
          brand: "HEINEKEN",
          title: "Bringing Heineken's 'WYDND' to life at the inaugural Miami grand prix",
          image: "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
        },
        {
          brand: "KLOPP",
          title: "From Klopp to communities, refining fitness accessibility",
          image: "https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
      ]
    },
    // 02
    {
      service_name:"experience-technology-consulting",
      types: [
        "Audience Definition + Insights",
        "Data, Analytics + Measurement",
        "Growth Strategy, Innovation + Consulting",
        "UX, CX Design, CRM + Loyalty"
      ],
      media :[
          {
            "brand": "SEPHORA",
            "title": "From super hype to hyper local: Sephora’s UK launch strategy",
            "image": "https://unsplash-assets.imgix.net/marketing/studio/deck/6.jpg?w=336&dpr=2&q=80&h=441&auto=format&fit=crop",
          },
          {
            "brand": "AUSTRALIAN RED CROSS LIFEBLOOD",
            "title": "Turning motivational stories into a powerful call to action",
            "image": "https://images.unsplash.com/photo-1564419320415-7f119406236e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            "brand": "THE NORTH FACE",
            "title": "Reinforcing leadership in the outdoors",
            "image": "https://unsplash-assets.imgix.net/marketing/studio/deck/2.jpg?w=336&dpr=2&q=80&h=441&auto=format&fit=crop",
          }
        ]
    },
    // 03
    {
      service_name:"media-sponsorship",
      types: [
        "Performance Marketing + Retail Media",
        "Sponsorships, Partnerships + Rights Management"
      ],
      media :[
        {
          "brand": "WOOLWORTHS",
          "title": "Woolworths Australia proves that fresh fuels the best in all of us",
          "image": "https://images.unsplash.com/photo-1542838687-0dff2d518abf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          "brand": "LNER",
          "title": "Eleanor & LNER: Reinventing rail travel with joy and connection",
          "image": "https://images.unsplash.com/photo-1633113215937-18127a49a8a4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          "brand": "CONTINENTAL",
          "title": "A premium partnership build on performance",
          "image": "https://images.unsplash.com/photo-1649972904914-5d5aaf3d1793?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
      ]
    },
    // 04
    {
      service_name:"specialist-services",
      types: [
        "Talent Management",
        "Sports + Entertainment",
        "Global + Social Issues"
      ],
      media :[
        {
          "brand": "CARRERA",
          "title": "Turning a brand with history into a powerful story",
          "image": "https://images.unsplash.com/photo-1682687220305-ce8a9ab237b1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "brand": "AMAZON",
          "title": "Transforming data into actionable intelligence",
          "image": "https://images.unsplash.com/photo-1683009427619-a1a11b799e05?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "brand": "LEGO",
          "title": "Creative collaboration builds cultural powerhouse",
          "image": "https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ]
    },
  ]

}

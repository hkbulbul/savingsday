"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, Minus, Info, ShieldCheck, Calculator, Cpu, HardDrive, Zap, Network } from "lucide-react"

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4 text-[#00b090] mt-1 shrink-0">
    <path fill="currentColor" d="M11.102 7.37a.75.75 0 1 0-1.06-1.06L7.54 8.81 6.508 7.78a.75.75 0 0 0-1.06 1.06l1.407 1.408a.968.968 0 0 0 1.37 0l2.877-2.878Z"></path>
    <path fill="currentColor" fillRule="evenodd" d="M15 7.995a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" clipRule="evenodd"></path>
  </svg>
)

const GrayIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[#888faa] mt-1 shrink-0">
    {children}
  </div>
)

interface Feature {
  text: string
  bold?: number[] | "all"
  icon?: "world" | "minus" | "disk" | "mail" | "node" | "pages" | "cpu" | "ram" | "nvme" | "bandwidth"
  disabled?: boolean
  type?: "success" | "header"
  badge?: string
  badgeColor?: string
}

type Period = 12 | 24 | 48

interface Pricing {
  originalPrice: string
  price: string
  renewal: string
  link: string
}

interface Plan {
  title: string
  description: string
  discount: string
  popular: boolean
  features: Feature[]
  periods: Record<Period, Pricing>
}

const plans: Plan[] = [
  {
    title: "Single",
    description: "A great solution for beginners",
    discount: "20% OFF",
    popular: false,
    periods: {
      12: {
        originalPrice: "69.00",
        price: "55.20",
        renewal: "Get 48 months for ₹3,312.00 (regular price ₹19,152.00). Renews at ₹289.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Ahostinger_single&period=12&referral_type=cart_link&REFERRALCODE=savingsday"
      },
      24: {
        originalPrice: "69.00",
        price: "55.20",
        renewal: "Get 48 months for ₹3,312.00 (regular price ₹19,152.00). Renews at ₹289.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Ahostinger_single&period=24&referral_type=cart_link&REFERRALCODE=savingsday"
      },
      48: {
        originalPrice: "69.00",
        price: "55.20",
        renewal: "Get 48 months for ₹3,312.00 (regular price ₹19,152.00). Renews at ₹289.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Ahostinger_single&period=48&referral_type=cart_link&REFERRALCODE=savingsday"
      }
    },
    features: [
      { text: "Create 1 website", bold: [1], icon: "world" },
      { text: "No Node.js web apps", icon: "minus", disabled: true },
      { text: "10 GB of storage for your files (SSD)", bold: [0], icon: "disk" },
      { text: "1 mailbox per website - free for 1 year", bold: [0], icon: "mail" },
      { text: "Keep every site safe with free SSL", type: "success" },
      { text: "Weekly auto backups for easy data recovery", type: "success" },
      { text: "Migrate your site for free and with no downtime", type: "success" },
    ]
  },
  {
    title: "Premium",
    description: "Everything you need to get started",
    discount: "20% OFF",
    popular: true,
    periods: {
      12: {
        originalPrice: "219.00",
        price: "175.20",
        renewal: "Get 48 months for ₹5,882.40 (regular price ₹31,152.00). Renews at ₹449.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Ahostinger_premium&period=12&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb777-7e64-7168-828d-fbd54963cc64"
      },
      24: {
        originalPrice: "219.00",
        price: "175.20",
        renewal: "Get 48 months for ₹5,882.40 (regular price ₹31,152.00). Renews at ₹449.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Ahostinger_premium&period=24&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb777-7e64-7168-828d-fbd54963cc64"
      },
      48: {
        originalPrice: "219.00",
        price: "175.20",
        renewal: "Get 48 months for ₹5,882.40 (regular price ₹31,152.00). Renews at ₹449.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Ahostinger_premium&period=48&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb777-7e64-7168-828d-fbd54963cc64"
      }
    },
    features: [
      { text: "Create up to 3 websites", bold: [2], icon: "world" },
      { text: "No Node.js web apps", icon: "minus", disabled: true },
      { text: "20 GB of storage for your files (SSD)", bold: [0], icon: "disk" },
      { text: "2 mailboxes per website - free for 1 year", bold: [0], icon: "mail" },
      { text: "All the benefits of Single, plus:", bold: "all", type: "header" },
      { text: "Free domain for 1 year", type: "success" },
      { text: "Enjoy having your WordPress sites maintained for you", type: "success" },
      { text: "Free Email marketing for 1 year", type: "success" },
      { text: "Build sites in minutes with AI Website Builder", type: "success" },
    ]
  },
  {
    title: "Business",
    description: "More tools and power for growth",
    discount: "20% OFF",
    popular: false,
    periods: {
      12: {
        originalPrice: "379.00",
        price: "303.20",
        renewal: "Get 48 months for ₹9,074.40 (regular price ₹38,352.00). Renews at ₹649.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Ahostinger_business&period=12&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb777-d508-70cc-b80f-176f4beec2ab"
      },
      24: {
        originalPrice: "379.00",
        price: "303.20",
        renewal: "Get 48 months for ₹9,074.40 (regular price ₹38,352.00). Renews at ₹649.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Ahostinger_business&period=24&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb777-d508-70cc-b80f-176f4beec2ab"
      },
      48: {
        originalPrice: "379.00",
        price: "303.20",
        renewal: "Get 48 months for ₹9,074.40 (regular price ₹38,352.00). Renews at ₹649.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Ahostinger_business&period=48&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb777-d508-70cc-b80f-176f4beec2ab"
      }
    },
    features: [
      { text: "Create up to 50 websites", bold: [2], icon: "world" },
      { text: "5 Node.js web apps", bold: [0], icon: "node", badge: "NEW" },
      { text: "50 GB of world’s fastest NVMe storage", bold: [0], icon: "disk" },
      { text: "5 mailboxes per website - free for 1 year", bold: [0], icon: "mail" },
      { text: "Everything in Premium, plus:", bold: "all", type: "header" },
      { text: "Daily and on-demand backups to prevent any data loss", type: "success" },
      { text: "Build an ecommerce site with AI", type: "success" },
      { text: "AI Agent for WordPress", type: "success", badge: "FREE", badgeColor: "bg-[#e5f7f3] text-[#00b090]" },
      { text: "Create ready-to-go WordPress sites in minutes with AI", type: "success" },
      { text: "Enjoy maximum website speed with free CDN", type: "success" },
      { text: "Manage sites easier with WordPress Multisite", type: "success" },
    ]
  },
  {
    title: "Cloud Startup",
    description: "20X more power for your websites with Cloud hosting",
    discount: "20% OFF",
    popular: false,
    periods: {
      12: {
        originalPrice: "799.00",
        price: "639.20",
        renewal: "Get 48 months for ₹25,034.40 (regular price ₹81,552.00). Renews at ₹1,599.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Acloud_economy&period=12&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb778-26b2-7087-ac83-392bf26bf6a4"
      },
      24: {
        originalPrice: "799.00",
        price: "639.20",
        renewal: "Get 48 months for ₹25,034.40 (regular price ₹81,552.00). Renews at ₹1,599.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Acloud_economy&period=24&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb778-26b2-7087-ac83-392bf26bf6a4"
      },
      48: {
        originalPrice: "799.00",
        price: "639.20",
        renewal: "Get 48 months for ₹25,034.40 (regular price ₹81,552.00). Renews at ₹1,599.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Acloud_economy&period=48&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb778-26b2-7087-ac83-392bf26bf6a4"
      }
    },
    features: [
      { text: "Create up to 100 websites", bold: [2], icon: "world" },
      { text: "10 Node.js web apps", bold: [0], icon: "node", badge: "NEW" },
      { text: "100 GB of world’s fastest NVMe storage", bold: [0], icon: "disk" },
      { text: "10 mailboxes per website - free for 1 year", bold: [0], icon: "mail" },
      { text: "Everything in Business, plus:", bold: "all", type: "header" },
      { text: "Enjoy priority expert support – 24/7", type: "success" },
      { text: "Handle peak traffic with a power boost for a week/month", type: "success" },
      { text: "Get extra control and stability with a dedicated IP address", type: "success" },
      { text: "100 PHP workers for busy sites", type: "success" },
      { text: "2M inodes to scale your files", type: "success" },
      { text: "4 GB RAM for smooth site performance", type: "success" },
    ]
  }
]

const builderPlans: Plan[] = [
  {
    title: "Premium Website Builder",
    description: "Get the essentials to create a website",
    discount: "20% OFF",
    popular: false,
    periods: {
      12: {
        originalPrice: "153.19",
        price: "122.55",
        renewal: "Get 48 months for ₹5,882.40 (regular price ₹31,152.00). Renews at ₹449.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Ahostinger_premium&period=12&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb779-00d5-72f6-9043-bb1fe776bca0&product_type=website-builder"
      },
      24: {
        originalPrice: "153.19",
        price: "122.55",
        renewal: "Get 48 months for ₹5,882.40 (regular price ₹31,152.00). Renews at ₹449.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Ahostinger_premium&period=24&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb779-00d5-72f6-9043-bb1fe776bca0&product_type=website-builder"
      },
      48: {
        originalPrice: "153.19",
        price: "122.55",
        renewal: "Get 48 months for ₹5,882.40 (regular price ₹31,152.00). Renews at ₹449.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Ahostinger_premium&period=48&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb779-00d5-72f6-9043-bb1fe776bca0&product_type=website-builder"
      }
    },
    features: [
      { text: "Create 1 website", bold: [1], icon: "world" },
      { text: "5 website pages", bold: [0], icon: "pages" },
      { text: "2 GB storage for your files", bold: [0], icon: "disk" },
      { text: "1 mailbox per website - free for 1 year", bold: [0], icon: "mail" },
      { text: "Premium benefits:", bold: "all", type: "header" },
      { text: "Free domain for 1 year", type: "success" },
      { text: "Build sites in minutes with AI Website Builder", type: "success" },
      { text: "Choose from 170+ designer-made templates", type: "success" },
      { text: "Create and send email campaigns with AI in a few clicks", type: "success" },
      { text: "Grow faster with tools for SEO, email, and marketing your business", type: "success" },
      { text: "Update your site anytime with mobile editing", type: "success" },
    ]
  },
  {
    title: "Business Website Builder",
    description: "Grow with AI tools and ecommerce features",
    discount: "20% OFF",
    popular: true,
    periods: {
      12: {
        originalPrice: "236.31",
        price: "189.05",
        renewal: "Get 48 months for ₹9,074.40 (regular price ₹38,352.00). Renews at ₹649.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Ahostinger_business&period=12&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb779-67e2-723d-b986-1dd97ec49fd3&product_type=website-builder"
      },
      24: {
        originalPrice: "236.31",
        price: "189.05",
        renewal: "Get 48 months for ₹9,074.40 (regular price ₹38,352.00). Renews at ₹649.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Ahostinger_business&period=24&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb779-67e2-723d-b986-1dd97ec49fd3&product_type=website-builder"
      },
      48: {
        originalPrice: "236.31",
        price: "189.05",
        renewal: "Get 48 months for ₹9,074.40 (regular price ₹38,352.00). Renews at ₹649.00/mo.",
        link: "https://www.hostinger.in/cart?product=hosting%3Ahostinger_business&period=48&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb779-67e2-723d-b986-1dd97ec49fd3&product_type=website-builder"
      }
    },
    features: [
      { text: "Create 50 websites", bold: [1], icon: "world" },
      { text: "Unlimited website pages", bold: [0], icon: "pages" },
      { text: "50 GB storage for your files", bold: [0], icon: "disk" },
      { text: "5 mailboxes per website - free for 1 year", bold: [0], icon: "mail" },
      { text: "Everything in Premium, plus:", bold: "all", type: "header" },
      { text: "Sell up to 1000 products and manage your store easily", type: "success" },
      { text: "Keep 100% of your profits with zero transaction fees", type: "success" },
      { text: "Offer 100+ payment methods to reach more customers", type: "success" },
      { text: "Track performance with live analytics", type: "success" },
      { text: "Sell custom merch with built-in Printful integration", type: "success" },
      { text: "Polish your copy with AI text editor", type: "success" },
      { text: "Create standout visuals using AI image generator", type: "success" },
      { text: "Share your story with AI blog post generator", type: "success" },
      { text: "Upload images and generate descriptions with AI product generator", type: "success" },
      { text: "Design your brand identity fast with AI logo maker", type: "success" },
      { text: "Optimize your content with AI SEO assistant", type: "success" },
      { text: "Turn clicks into customers with a link in bio", type: "success" },
    ]
  }
]

const vpsPlans: Plan[] = [
  {
    title: "KVM 1",
    description: "The perfect start for low-traffic websites.",
    discount: "20% OFF",
    popular: false,
    periods: {
      12: {
        originalPrice: "473.81",
        price: "379.05",
        renewal: "Renews at ₹739.00/mo for 2 years. Cancel anytime.",
        link: "https://www.hostinger.in/cart?product=vps%3Avps_kvm_1&period=12&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb77a-2a93-706e-a33f-dfca6c2e90b7"
      },
      24: {
        originalPrice: "473.81",
        price: "379.05",
        renewal: "Renews at ₹739.00/mo for 2 years. Cancel anytime.",
        link: "https://www.hostinger.in/cart?product=vps%3Avps_kvm_1&period=24&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb77a-2a93-706e-a33f-dfca6c2e90b7"
      },
      48: {
        originalPrice: "473.81",
        price: "379.05",
        renewal: "Renews at ₹739.00/mo for 2 years. Cancel anytime.",
        link: "https://www.hostinger.in/cart?product=vps%3Avps_kvm_1&period=48&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb77a-2a93-706e-a33f-dfca6c2e90b7"
      }
    },
    features: [
      { text: "1 vCPU cores", bold: [0], icon: "cpu" },
      { text: "4 GB RAM", bold: [0], icon: "ram" },
      { text: "50 GB NVMe disk space", bold: [0, 1], icon: "nvme" },
      { text: "4 TB bandwidth", bold: [0, 1], icon: "bandwidth" },
    ]
  },
  {
    title: "KVM 2",
    description: "Great performance for medium-sized projects.",
    discount: "20% OFF",
    popular: true,
    periods: {
      12: {
        originalPrice: "651.94",
        price: "521.55",
        renewal: "Renews at ₹999.00/mo for 2 years. Cancel anytime.",
        link: "https://www.hostinger.in/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb77a-5e53-7206-a00a-5f200fd06834"
      },
      24: {
        originalPrice: "651.94",
        price: "521.55",
        renewal: "Renews at ₹999.00/mo for 2 years. Cancel anytime.",
        link: "https://www.hostinger.in/cart?product=vps%3Avps_kvm_2&period=24&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb77a-5e53-7206-a00a-5f200fd06834"
      },
      48: {
        originalPrice: "651.94",
        price: "521.55",
        renewal: "Renews at ₹999.00/mo for 2 years. Cancel anytime.",
        link: "https://www.hostinger.in/cart?product=vps%3Avps_kvm_2&period=48&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb77a-5e53-7206-a00a-5f200fd06834"
      }
    },
    features: [
      { text: "2 vCPU cores", bold: [0], icon: "cpu" },
      { text: "8 GB RAM", bold: [0], icon: "ram" },
      { text: "100 GB NVMe disk space", bold: [0, 1], icon: "nvme" },
      { text: "8 TB bandwidth", bold: [0, 1], icon: "bandwidth" },
    ]
  },
  {
    title: "KVM 4",
    description: "Powerful resources for high-traffic sites.",
    discount: "20% OFF",
    popular: false,
    periods: {
      12: {
        originalPrice: "889.44",
        price: "711.55",
        renewal: "Renews at ₹1,999.00/mo for 2 years. Cancel anytime.",
        link: "https://www.hostinger.in/cart?product=vps%3Avps_kvm_4&period=12&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb77b-40c6-7231-8e60-b1fa32fa0f09"
      },
      24: {
        originalPrice: "889.44",
        price: "711.55",
        renewal: "Renews at ₹1,999.00/mo for 2 years. Cancel anytime.",
        link: "https://www.hostinger.in/cart?product=vps%3Avps_kvm_4&period=24&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb77b-40c6-7231-8e60-b1fa32fa0f09"
      },
      48: {
        originalPrice: "889.44",
        price: "711.55",
        renewal: "Renews at ₹1,999.00/mo for 2 years. Cancel anytime.",
        link: "https://www.hostinger.in/cart?product=vps%3Avps_kvm_4&period=48&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb77b-40c6-7231-8e60-b1fa32fa0f09"
      }
    },
    features: [
      { text: "4 vCPU cores", bold: [0], icon: "cpu" },
      { text: "16 GB RAM", bold: [0], icon: "ram" },
      { text: "200 GB NVMe disk space", bold: [0, 1], icon: "nvme" },
      { text: "16 TB bandwidth", bold: [0, 1], icon: "bandwidth" },
    ]
  },
  {
    title: "KVM 8",
    description: "Ultimate control and power for large-scale ops.",
    discount: "20% OFF",
    popular: false,
    periods: {
      12: {
        originalPrice: "1780.06",
        price: "1424.05",
        renewal: "Renews at ₹3,999.00/mo for 2 years. Cancel anytime.",
        link: "https://www.hostinger.in/cart?product=vps%3Avps_kvm_8&period=12&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb77a-c256-7069-b2f3-d86ba44aa23e"
      },
      24: {
        originalPrice: "1780.06",
        price: "1424.05",
        renewal: "Renews at ₹3,999.00/mo for 2 years. Cancel anytime.",
        link: "https://www.hostinger.in/cart?product=vps%3Avps_kvm_8&period=24&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb77a-c256-7069-b2f3-d86ba44aa23e"
      },
      48: {
        originalPrice: "1780.06",
        price: "1424.05",
        renewal: "Renews at ₹3,999.00/mo for 2 years. Cancel anytime.",
        link: "https://www.hostinger.in/cart?product=vps%3Avps_kvm_8&period=48&referral_type=cart_link&REFERRALCODE=savingsday&referral_id=019bb77a-c256-7069-b2f3-d86ba44aa23e"
      }
    },
    features: [
      { text: "8 vCPU cores", bold: [0], icon: "cpu" },
      { text: "32 GB RAM", bold: [0], icon: "ram" },
      { text: "400 GB NVMe disk space", bold: [0, 1], icon: "nvme" },
      { text: "32 TB bandwidth", bold: [0, 1], icon: "bandwidth" },
    ]
  }
]

const PriceBreakdown = ({ original, final }: { original: string, final: string }) => {
  const diff = (parseFloat(original) - parseFloat(final)).toFixed(2)
  return (
    <div className="absolute bottom-full left-0 mb-4 w-64 p-5 bg-white dark:bg-zinc-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-indigo-100 dark:border-zinc-800 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 text-zinc-900 dark:text-zinc-100">
      <div className="flex items-center gap-2 mb-3 text-indigo-600 dark:text-indigo-400">
        <Calculator className="h-4 w-4" />
        <span className="text-[10px] font-black uppercase tracking-widest">Price Breakdown</span>
      </div>
      <div className="space-y-2.5">
        <div className="flex justify-between text-xs text-zinc-500">
          <span>Original Price</span>
          <span className="font-bold">₹ {original}</span>
        </div>
        <div className="flex justify-between text-xs text-[#00b090] bg-[#e5f7f3] dark:bg-emerald-900/20 px-2 py-1.5 rounded-lg font-bold">
          <span>Flat 20% Discount</span>
          <span>- ₹ {diff}</span>
        </div>
        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex justify-between text-sm font-black text-[#2f1c6a] dark:text-white">
          <span>Final Price</span>
          <span>₹ {final}</span>
        </div>
      </div>
      <p className="mt-4 text-[10px] text-zinc-400 leading-relaxed italic">
        * A flat 20% discount has been applied to the regular plan price for the first term.
      </p>
      {/* Arrow */}
      <div className="absolute top-full left-6 -translate-y-px border-8 border-transparent border-t-white dark:border-t-zinc-900" />
    </div>
  )
}

const tabItems = [
  {
    title: "Web hosting",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4">
        <path fill="currentColor" d="M4 4.781a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.5 4.781a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8.25 5.531a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
        <path fill="currentColor" fillRule="evenodd" d="M0 3.083C0 1.933.933 1 2.083 1h11.834C15.067 1 16 1.933 16 3.083v9.834c0 1.15-.933 2.083-2.083 2.083H2.083A2.083 2.083 0 0 1 0 12.917V3.083ZM2.083 2.5h11.834c.322 0 .583.261.583.583v9.834a.583.583 0 0 1-.583.583H2.083a.583.583 0 0 1-.583-.583V3.083c0-.322.261-.583.583-.583Z" clipRule="evenodd"></path>
      </svg>
    )
  },
  {
    title: "Website Builder",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4">
        <path fill="currentColor" d="M4.664 1.344v9.085l-3.333 3.33V4.67l3.333-3.327ZM11.333 11.326 8 14.656H2.197l3.336-3.33h5.8ZM14.669 2.242v9.085l-3.336 3.329V5.57l3.336-3.329Z"></path>
        <path fill="currentColor" d="m13.77 1.344-3.337 3.327h-5.77L8 1.344h5.77Z"></path>
      </svg>
    )
  },
  {
    title: "VPS hosting",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4">
        <path fill="currentColor" fillRule="evenodd" d="M2.75 3.5c0-.598.279-1.081.655-1.439.366-.347.842-.598 1.332-.781C5.72.912 6.938.75 8 .75c1.062 0 2.281.162 3.263.53.49.183.966.434 1.332.781.376.358.655.841.655 1.439V12c0 1.084-.777 1.91-1.698 2.423-.944.526-2.2.827-3.552.827-1.352 0-2.608-.301-3.552-.827-.92-.512-1.698-1.339-1.698-2.423V3.5Zm1.5 0c0-.092.034-.204.188-.351.166-.158.44-.32.825-.464C6.03 2.397 7.062 2.25 8 2.25c.938 0 1.969.147 2.737.435.385.144.659.306.825.464.154.147.188.259.188.351 0 .092-.034.204-.188.351-.166.158-.44.32-.825.464-.768.288-1.799.435-2.737.435-.938 0-1.969-.147-2.737-.435-.385-.144-.659-.306-.825-.464-.154-.147-.188-.259-.188-.351Zm0 5.01v.99c0 .092.034.204.188.351.166.158.44.32.825.464.768.288 1.799.435 2.737.435.938 0 1.969-.147 2.737-.435.385-.144.659-.306.825-.464.154-.147.188-.259.188-.351v-.99a5.255 5.255 0 0 1-.487.21c-.982.368-2.201.53-3.263.53-1.062 0-2.281-.162-3.263-.53a5.258 5.258 0 0 1-.487-.21Zm7.5-2.01c0 .092-.034.204-.188.351-.166.158-.44.32-.825.464-.768.288-1.799.435-2.737.435-.938 0-1.969-.147-2.737-.435-.385-.144-.659-.306-.825-.464-.154-.147-.188-.259-.188-.351v-.99c.158.079.322.148.487.21.982.368 2.201.53 3.263.53 1.062 0 2.281-.162 3.263-.53.165-.062.329-.131.487-.21v.99Zm0 5.01a5.258 5.258 0 0 1-.487.21c-.982.368-2.201.53-3.263.53-1.062 0-2.281-.162-3.263-.53a5.26 5.26 0 0 1-.487-.21V12c0 .296.223.72.927 1.113.681.379 1.675.637 2.823.637s2.142-.258 2.823-.637c.704-.393.927-.817.927-1.113v-.49Z" clipRule="evenodd"></path>
      </svg>
    )
  }
]

export default function HostingerPage() {
  const [activeTab, setActiveTab] = React.useState("Web hosting")
  const [selectedPeriod, setSelectedPeriod] = React.useState<Period>(12)
  const [timeLeft, setTimeLeft] = React.useState({
    days: 1,
    hours: 14,
    minutes: 37,
    seconds: 19
  })

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev
        if (seconds > 0) { seconds-- } else { seconds = 59; if (minutes > 0) { minutes-- } else { minutes = 59; if (hours > 0) { hours-- } else { hours = 23; if (days > 0) { days-- } else { return prev } } } }
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  const currentPlans = activeTab === "Web hosting" ? plans : activeTab === "Website Builder" ? builderPlans : activeTab === "VPS hosting" ? vpsPlans : []

  return (
    <main className="min-h-screen pt-16 pb-20 bg-white dark:bg-black font-sans antialiased text-zinc-900 dark:text-zinc-100">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#2f1c6a] dark:text-white leading-[1.2]">
                Hostinger coupon codes and promotions
              </h1>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                Jackpot! You’ve just discovered our latest coupon codes and deals.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-baseline gap-2 flex-wrap group relative w-fit">
                <span className="text-lg font-medium text-zinc-400 line-through decoration-zinc-400/50 cursor-help">₹ {plans[0].periods[selectedPeriod].originalPrice}</span>
                <div className="flex items-baseline gap-1 cursor-help">
                  <span className="text-xl font-medium text-[#2f1c6a] dark:text-white">₹</span>
                  <span className="text-5xl font-bold text-[#2f1c6a] dark:text-white">{plans[0].periods[selectedPeriod].price}</span>
                  <span className="text-lg text-zinc-400">/mo</span>
                </div>
                <PriceBreakdown original={plans[0].periods[selectedPeriod].originalPrice} final={plans[0].periods[selectedPeriod].price} />
              </div>
              <p className="text-xl md:text-2xl font-bold text-[#2f1c6a] dark:text-indigo-400">
                +3 months free
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-12 py-4 rounded-xl bg-[#673de6] text-white font-bold text-base shadow-lg shadow-indigo-500/20 hover:bg-[#5832cc] transition-all active:scale-95"
              >
                Claim coupon
              </button>

              <div className="flex items-center gap-3 bg-[#eef0ff] dark:bg-zinc-900/50 px-6 py-4 rounded-2xl border border-indigo-100 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center gap-1 font-bold text-[#2f1c6a] dark:text-white">
                  <span>{formatNumber(timeLeft.days)}</span><span className="text-[10px] text-zinc-400 mt-1 ml-0.5">D</span>
                </div>
                <div className="flex items-center gap-1 font-bold text-[#2f1c6a] dark:text-white ml-3">
                  <span>{formatNumber(timeLeft.hours)}</span><span className="text-[10px] text-zinc-400 mt-1 ml-0.5">H</span>
                </div>
                <div className="flex items-center gap-1 font-bold text-[#2f1c6a] dark:text-white ml-3">
                  <span>{formatNumber(timeLeft.minutes)}</span><span className="text-[10px] text-zinc-400 mt-1 ml-0.5">M</span>
                </div>
                <div className="flex items-center gap-1 font-bold text-[#2f1c6a] dark:text-white ml-3">
                  <span>{formatNumber(timeLeft.seconds)}</span><span className="text-[10px] text-zinc-400 mt-1 ml-0.5">S</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm font-medium">
              <ShieldCheck className="h-4 w-4 text-[#00b090]" />
              30-day money-back guarantee
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="absolute inset-0 bg-indigo-500/5 blur-[100px] rounded-full" />
            <img
              src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/e7216968-5716-4ded-2c3e-38df0ba76300/public"
              alt="Hostinger coupon codes and promotions"
              className="relative z-10 w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-7xl mx-auto flex flex-col items-center pt-8">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#2f1c6a] dark:text-zinc-100 mb-8"
        >
          Pick your perfect plan
        </h2>

        {/* Tab Toggle */}
        <div className="flex p-1 bg-[#f4f5f9] dark:bg-zinc-900 rounded-2xl mb-8 overflow-x-auto max-w-full mx-4 no-scrollbar">
          {tabItems.map((tab) => (
            <button
              key={tab.title}
              onClick={() => setActiveTab(tab.title)}
              className={cn(
                "flex items-center gap-2 px-8 py-3 rounded-xl transition-all duration-200 font-bold text-sm whitespace-nowrap",
                activeTab === tab.title
                  ? "bg-white dark:bg-zinc-800 text-[#2f1c6a] dark:text-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
              )}
            >
              <span className="opacity-70">{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </div>

        {/* Period Toggle */}
        <div className="flex p-1 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl mb-12">
          {([12, 24, 48] as Period[]).map((p) => (
            <button
              key={p}
              onClick={() => setSelectedPeriod(p)}
              className={cn(
                "px-6 py-2 rounded-lg transition-all duration-200 font-bold text-xs whitespace-nowrap",
                selectedPeriod === p
                  ? "bg-[#673de6] text-white shadow-md shadow-indigo-500/20"
                  : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
              )}
            >
              {p} Months
            </button>
          ))}
        </div>

        {/* Pricing Grid */}
        {currentPlans.length === 0 ? (
          <div className="w-full h-64 flex items-center justify-center text-zinc-400" >
            Coming Soon
          </div>
        ) : (
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4",
            activeTab === "Website Builder" && "lg:grid-cols-2 max-w-4xl mx-auto"
          )}>
            {currentPlans.map((plan) => (
              <div
                key={plan.title}
                className={cn(
                  "relative flex flex-col p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border transition-all duration-300",
                  plan.popular
                    ? "border-[#673de6] shadow-xl shadow-indigo-500/10 lg:scale-[1.02] z-10"
                    : "border-zinc-100 dark:border-zinc-800"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#673de6] text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-wider">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <span className="inline-block bg-[#e5e7ff] text-[#2f1c6a] text-[10px] font-bold px-2 py-1 rounded-md mb-3">
                    {plan.discount}
                  </span>
                  <h3 className="text-2xl font-bold text-[#2f1c6a] dark:text-white mb-2">{plan.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed min-h-[2.5rem]">{plan.description}</p>
                </div>

                <div className="flex flex-col mb-8 group relative w-fit">
                  <span className="text-sm font-medium text-zinc-400 line-through decoration-zinc-400/50 mb-1 cursor-help">
                    ₹ {plan.periods[selectedPeriod].originalPrice}
                  </span>
                  <div className="flex items-baseline gap-1 cursor-help">
                    <span className="text-lg font-bold text-[#2f1c6a] dark:text-white">₹</span>
                    <span className="text-4xl font-bold text-[#2f1c6a] dark:text-white">{plan.periods[selectedPeriod].price}</span>
                    <span className="text-sm font-medium text-zinc-400 lowercase ml-1">/mo</span>
                  </div>
                  <PriceBreakdown original={plan.periods[selectedPeriod].originalPrice} final={plan.periods[selectedPeriod].price} />
                </div>

                <a
                  href={plan.periods[selectedPeriod].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-full py-4 rounded-xl font-bold text-sm mb-6 transition-all active:scale-95 text-center flex items-center justify-center",
                    plan.popular
                      ? "bg-[#673de6] text-white hover:bg-[#5832cc]"
                      : "bg-white dark:bg-zinc-800 border-2 border-[#673de6] text-[#673de6] dark:text-indigo-400 hover:bg-[#f8f6ff]"
                  )}
                >
                  Use coupon
                </a>

                <p className="text-[10px] leading-relaxed text-zinc-400 mb-8 pb-8 border-b border-zinc-50 dark:border-zinc-800">
                  {plan.periods[selectedPeriod].renewal}
                </p>

                <div className="space-y-4 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3 items-start group">
                      {feature.type === "success" || feature.type === "header" ? (
                        <CheckIcon />
                      ) : (
                        <GrayIcon>
                          {feature.icon === "world" && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4"><path fill="currentColor" fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm-.76-7.748V3.296c-1.14 1.236-1.775 2.6-1.944 3.96l1.944-.004Zm0 1.5-1.942.004c.17 1.356.805 2.715 1.942 3.947v-3.95ZM3.786 7.26c.142-1.44.697-2.844 1.642-4.122a5.504 5.504 0 0 0-2.879 4.124l1.237-.002ZM2.552 8.76l1.236-.002c.145 1.433.7 2.83 1.64 4.104A5.504 5.504 0 0 1 2.552 8.76ZM8.74 8.75l1.975-.003c-.17 1.371-.815 2.747-1.975 3.99V8.75Zm1.974-1.503-1.974.003V3.263c1.157 1.241 1.802 2.614 1.974 3.983Zm1.51 1.497c-.141 1.435-.694 2.835-1.633 4.11a5.504 5.504 0 0 0 2.86-4.113l-1.226.003Zm1.224-1.503-1.225.003c-.144-1.43-.696-2.825-1.632-4.096a5.504 5.504 0 0 1 2.857 4.093Z" clipRule="evenodd"></path></svg>}
                          {feature.icon === "minus" && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4"><path fill="currentColor" d="M3.993 8c0 .414.335.75.75.75h6.541a.75.75 0 0 0 0-1.5H4.743a.75.75 0 0 0-.75.75Z"></path></svg>}
                          {feature.icon === "disk" && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4"><path fill="currentColor" fillRule="evenodd" d="M2.75 3.5c0-.598.279-1.081.655-1.439.366-.347.842-.598 1.332-.781C5.72.912 6.938.75 8 .75c1.062 0 2.281.162 3.263.53.49.183.966.434 1.332.781.376.358.655.841.655 1.439V12c0 1.084-.777 1.91-1.698 2.423-.944.526-2.2.827-3.552.827-1.352 0-2.608-.301-3.552-.827-.92-.512-1.698-1.339-1.698-2.423V3.5Zm1.5 0c0-.092.034-.204.188-.351.166-.158.44-.32.825-.464C6.03 2.397 7.062 2.25 8 2.25c.938 0 1.969.147 2.737.435.385.144.659.306.825.464.154.147.188.259.188.351 0 .092-.034.204-.188.351-.166.158-.44.32-.825.464-.768.288-1.799.435-2.737.435-.938 0-1.969-.147-2.737-.435-.385-.144-.659-.306-.825-.464-.154-.147-.188-.259-.188-.351Zm0 5.01v.99c0 .092.034.204.188.351.166.158.44.32.825.464.768.288 1.799.435 2.737.435.938 0 1.969-.147 2.737-.435.385-.144.659-.306.825-.464.154-.147.188-.259.188-.351v-.99a5.255 5.255 0 0 1-.487.21c-.982.368-2.201.53-3.263.53-1.062 0-2.281-.162-3.263-.53a5.258 5.258 0 0 1-.487-.21Zm7.5-2.01c0 .092-.034.204-.188.351-.166.158-.44.32-.825.464-.768.288-1.799.435-2.737.435-.938 0-1.969-.147-2.737-.435-.385-.144-.659-.306-.825-.464-.154-.147-.188-.259-.188-.351v-.99c.158.079.322.148.487.21.982.368 2.201.53 3.263.53 1.062 0 2.281-.162 3.263-.53.165-.062.329-.131.487-.21v.99Zm0 5.01a5.258 5.258 0 0 1-.487.21c-.982.368-2.201.53-3.263.53-1.062 0-2.281-.162-3.263-.53a5.26 5.26 0 0 1-.487-.21V12c0 .296.223.72.927 1.113.681.379 1.675.637 2.823.637s2.142-.258 2.823-.637c.704-.393.927-.817.927-1.113v-.49Z" clipRule="evenodd"></path></svg>}
                          {feature.icon === "mail" && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4"><path fill="currentColor" fillRule="evenodd" d="M1 5.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C2.52 2.5 3.08 2.5 4.2 2.5h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C15 4.02 15 4.58 15 5.7v4.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H4.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C1 11.98 1 11.42 1 10.3V5.7Zm2.009-1.678C3.267 4.002 3.615 4 4.2 4h7.6c.585 0 .933.001 1.191.022.158.013.224.03.242.036.02.01.04.022.059.036L8 8.062 2.708 4.095a.501.501 0 0 1 .059-.036c.018-.006.084-.023.242-.036ZM2.5 5.812V10.3c0 .585.001.933.022 1.191.013.158.03.224.036.242a.5.5 0 0 0 .209.21c.018.005.084.022.242.035.258.02.606.022 1.191.022h7.6c.585 0 .933-.001 1.191-.022.158-.013.224-.03.242-.036a.5.5 0 0 0 .21-.209c.005-.018.022-.084.035-.242.02-.258.022-.606.022-1.191V5.812L8.75 9.376a1.25 1.25 0 0 1-1.5 0L2.5 5.812ZM13.238 4.06h-.003.003Zm.203 7.68v-.004a.012.012 0 0 1 0 .003Zm-.203.201-.003.002.003-.002Zm-10.476 0 .003.002-.003-.002Zm-.203-.203v.001-.003.002Zm.203-7.678h.003-.003Z" clipRule="evenodd"></path></svg>}
                          {feature.icon === "node" && <Info className="h-4 w-4" />}
                          {feature.icon === "pages" && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4">
                              <path fill="currentColor" d="M4 4.781a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.5 4.781a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8.25 5.531a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
                              <path fill="currentColor" fillRule="evenodd" d="M0 3.083C0 1.933.933 1 2.083 1h11.834C15.067 1 16 1.933 16 3.083v9.834c0 1.15-.933 2.083-2.083 2.083H2.083A2.083 2.083 0 0 1 0 12.917V3.083ZM2.083 2.5h11.834c.322 0 .583.261.583.583v9.834a.583.583 0 0 1-.583.583H2.083a.583.583 0 0 1-.583-.583V3.083c0-.322.261-.583.583-.583Z" clipRule="evenodd"></path>
                            </svg>
                          )}
                          {feature.icon === "cpu" && <Cpu className="h-4 w-4" />}
                          {feature.icon === "ram" && <Zap className="h-4 w-4" />}
                          {feature.icon === "nvme" && <HardDrive className="h-4 w-4" />}
                          {feature.icon === "bandwidth" && <Network className="h-4 w-4" />}
                        </GrayIcon>
                      )}
                      <span className={cn(
                        "text-[13px] font-medium leading-relaxed",
                        feature.disabled ? "text-zinc-300 line-through" : "text-zinc-600 dark:text-zinc-400",
                        feature.type === "header" && "font-bold text-[#2f1c6a] dark:text-zinc-100"
                      )}>
                        {Array.isArray(feature.bold) ? (
                          feature.text.split(" ").map((word, i) => (
                            <React.Fragment key={i}>
                              {(feature.bold as number[]).includes(i) ? <b className="font-bold text-[#2f1c6a] dark:text-white">{word}</b> : word}{" "}
                            </React.Fragment>
                          ))
                        ) : feature.bold === "all" ? (
                          <b className="font-bold text-[#2f1c6a] dark:text-white">{feature.text}</b>
                        ) : (
                          feature.text
                        )}
                        {feature.badge && (
                          <span className={cn(
                            "ml-2 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase align-middle whitespace-nowrap",
                            feature.badgeColor || "bg-[#e5e7ff] text-[#2f1c6a]"
                          )}>
                            {feature.badge}
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

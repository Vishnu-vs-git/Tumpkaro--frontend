import type { PricingPlan } from "./pricing.types";

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Free",
    price: "₹0",
    period: "/month",
    description: "Perfect for beginners",
    buttonText: "Get Started",
    features: [
      "10 AI thumbnails/day",
      "Basic templates",
      "Standard quality",
      "Community support",
    ],
  },
  {
    id: 2,
    name: "Pro",
    price: "₹499",
    period: "/month",
    description: "Best for creators",
    popular: true,
    buttonText: "Start Pro",
    features: [
      "Unlimited AI thumbnails",
      "Premium templates",
      "HD export",
      "Priority AI generation",
      "Thumbnail history",
      "Prompt library",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams & businesses",
    buttonText: "Contact Sales",
    features: [
      "Unlimited everything",
      "Team workspace",
      "API access",
      "Dedicated support",
      "Custom branding",
      "Analytics dashboard",
    ],
  },
];
interface PromoCardProps {
  title: string;
  description: string;
  desColor?: string;
  imageSrc: string | StaticImport;
  badgeText: string;
  badgeColor?: string;
  badgeBgColor?: string;
  priceBadge?: string;
  bgColor?: string;
  textColor?: string;
  price?: string;
  onShopNow?: () => void;
}

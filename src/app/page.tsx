"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardFour from '@/components/sections/metrics/MetricCardFour';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Zap, Flame, Gauge, Droplet, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="small"
      background="grid"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="F1 Motors"
          navItems={[
            { name: "About", id: "about" },
            { name: "Cars", id: "cars" },
            { name: "Performance", id: "performance" },
            { name: "Specifications", id: "specifications" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Access",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="F1 MOTORSPORT"
          description="Experience the pinnacle of racing performance. Discover our next generation of Formula 1 championship vehicles engineered for speed, precision, and excellence."
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591151339-t6egy13k.jpg",
              imageAlt: "Formula 1 car racing on track"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591152353-op8o9qi5.jpg",
              imageAlt: "F1 race car aerodynamic design"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591153195-oaaaq82k.jpg",
              imageAlt: "Racing vehicle high performance"
            }
          ]}
          buttons={[
            { text: "Explore Vehicles", href: "cars" },
            { text: "View Specs", href: "specifications" }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About F1 Motorsport"
          description="At F1 Motorsport, we push the boundaries of automotive engineering and racing performance. Our vehicles represent the culmination of decades of innovation, combining cutting-edge technology with the expertise of world-class engineers and drivers. Every component is designed for one purpose: to dominate the track and redefine what's possible in motorsport."
        />
      </div>

      <div id="cars" data-section="cars">
        <ProductCardOne
          title="Featured Race Vehicles"
          description="Our championship-winning fleet of Formula 1 vehicles showcasing the latest advancements in speed and engineering."
          tag="2025 Championship"
          products={[
            {
              id: "1",
              name: "Velocity Prime",
              price: "Elite Performance",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591154414-0eun3ygb.jpg",
              imageAlt: "Velocity Prime F1 car"
            },
            {
              id: "2",
              name: "Thunder Elite",
              price: "Track Dominance",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591155396-wbhar1zt.jpg",
              imageAlt: "Thunder Elite racing vehicle"
            },
            {
              id: "3",
              name: "Apex Legend",
              price: "Championship Ready",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591156475-h4ceuovb.jpg",
              imageAlt: "Apex Legend F1 machine"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
        />
      </div>

      <div id="performance" data-section="performance">
        <MetricCardFour
          title="Performance Metrics"
          description="Unmatched speed, power, and precision that defines championship racing."
          tag="Engineering Excellence"
          textboxLayout="default"
          metrics={[
            {
              id: "1",
              icon: Zap,
              title: "Top Speed",
              value: "370 km/h",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591157565-61lntf5f.jpg",
              imageAlt: "Top speed acceleration"
            },
            {
              id: "2",
              icon: Flame,
              title: "0-100 kmh",
              value: "1.8 sec",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591620898-gshxkf32.jpg",
              imageAlt: "Acceleration performance"
            },
            {
              id: "3",
              icon: Gauge,
              title: "Engine Power",
              value: "1000 HP",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591157565-61lntf5f.jpg",
              imageAlt: "Engine horsepower"
            },
            {
              id: "4",
              icon: Droplet,
              title: "Fuel Efficiency",
              value: "8.2 MPG",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591620898-gshxkf32.jpg",
              imageAlt: "Fuel consumption"
            }
          ]}
        />
      </div>

      <div id="specifications" data-section="specifications">
        <FeatureCardSix
          title="Vehicle Specifications"
          description="Detailed breakdown of our advanced engineering and technical capabilities."
          tag="Technical Details"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Aerodynamic Design",
              description: "Cutting-edge aerodynamics optimized for maximum downforce and minimal drag. Every curve and surface engineered for track performance.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591154414-0eun3ygb.jpg",
              imageAlt: "Aerodynamic vehicle design"
            },
            {
              id: 2,
              title: "Hybrid Power System",
              description: "Advanced hybrid power unit combining traditional engine with electric motors for unprecedented acceleration and reliability during races.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591158387-ccmy550n.jpg",
              imageAlt: "Hybrid power system"
            },
            {
              id: 3,
              title: "Advanced Suspension",
              description: "Precision-tuned suspension system providing optimal grip and stability. Real-time adaptive technology adjusts to track conditions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591155396-wbhar1zt.jpg",
              imageAlt: "Advanced suspension system"
            },
            {
              id: 4,
              title: "Safety Systems",
              description: "State-of-the-art safety features including carbon fiber chassis, protective barriers, and advanced driver assistance systems for maximum protection.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591156475-h4ceuovb.jpg",
              imageAlt: "Safety systems and protection"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Champion Testimonials"
          description="Hear from world-class drivers and team principals about their experience with our vehicles."
          tag="Driver Stories"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Max Verstappen",
              role: "Lead Driver",
              company: "Championship Team",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591159319-vqz18lnx.jpg",
              imageAlt: "Max Verstappen professional portrait"
            },
            {
              id: "2",
              name: "Lewis Hamilton",
              role: "Senior Driver",
              company: "Elite Racing",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591160376-8oi2whnp.jpg",
              imageAlt: "Lewis Hamilton team principal"
            },
            {
              id: "3",
              name: "Charles Leclerc",
              role: "Development Driver",
              company: "Performance Division",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591161594-noo3v1av.jpg",
              imageAlt: "Charles Leclerc podium winner"
            },
            {
              id: "4",
              name: "Sergio Perez",
              role: "Test Driver",
              company: "Innovation Labs",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591162643-b3y2dtey.jpg",
              imageAlt: "Sergio Perez F1 champion"
            }
          ]}
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofOne
          title="Official Teams and Partners"
          description="Trusted by the world's leading Formula 1 teams and racing organizations."
          tag="Strategic Partners"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591163406-oantrz8o.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591164197-jc7lcr5c.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591165409-kuglb40d.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591166244-4oo3sok1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591167384-s1yn6gxu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591168384-mwhw1lmq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/williams-racing-f1-logo-1764591170457-d38b759d.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591171612-ug21oo0f.jpg"
          ]}
          showCard={true}
          speed={40}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Experience F1 Excellence"
          description="Schedule a test drive or inquire about exclusive partnerships. Our team is ready to discuss how we can bring championship performance to your organization."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764591172715-mk6b5ejw.jpg"
          imageAlt="Luxury showroom interior"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Request Information"
          termsText="By submitting, you agree to our privacy policy and terms of service."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="F1 Motorsport"
          copyrightText="© F1 Motorsport, Inc. 2025. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                { label: "Vehicles", href: "cars" },
                { label: "Specifications", href: "specifications" },
                { label: "Performance", href: "performance" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Teams", href: "partners" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Press Kit", href: "/" },
                { label: "Media", href: "/" },
                { label: "Events", href: "/" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "/" },
                { label: "Terms of Service", href: "/" },
                { label: "Cookies", href: "/" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Like us on Facebook"
            },
            {
              icon: Youtube,
              href: "https://youtube.com",
              ariaLabel: "Subscribe on YouTube"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
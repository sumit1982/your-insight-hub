import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Calendar, Home, Dumbbell, UtensilsCrossed } from "lucide-react";

const useCases = [
  {
    icon: MessageCircle,
    title: "Customer Service Chatbots",
    description: "Efficiently handle enquiries, provide instant responses, resolve common issues, and escalate complex cases, ensuring a seamless and satisfying customer experience."
  },
  {
    icon: Calendar,
    title: "Appointment Booking Chatbots",
    description: "Efficiently schedule appointments by interacting with users, handling enquiries, confirming availability, sending reminders, and providing real-time updates."
  },
  {
    icon: Home,
    title: "Real Estate Chatbots",
    description: "Enhance real estate services with chatbots that can answer property enquiries, schedule viewings, provide virtual tours, and assist with the buying or renting process."
  },
  {
    icon: Home,
    title: "Hospitality Chatbots",
    description: "Improve guest services in the hospitality industry with chatbots that handle room bookings, provide local recommendations, manage guest requests, and offer concierge services."
  },
  {
    icon: Dumbbell,
    title: "Fitness and Wellness Chatbots",
    description: "Support health goals with fitness and wellness chatbots that provide workout plans, track progress, offer nutritional advice, and motivate users with personalised coaching."
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Reservation Chatbots",
    description: "Optimise restaurant operations with chatbots that handle reservations, manage waitlists, provide menu information, and offer personalised dining recommendations, enhancing the customer experience."
  }
];

const UseCases = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-consulting-navy mb-6">
            AI Use Cases
          </h2>
          <p className="text-xl text-consulting-gray max-w-3xl mx-auto">
            Discover how AI chatbots and automation can transform different industries and business processes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-consulting-blue to-primary rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-consulting-navy">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-consulting-gray text-base leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with advanced filtering and payment integration.",
    longDescription: `This comprehensive e-commerce solution was built to provide a seamless shopping experience. The platform features advanced product filtering, real-time inventory management, secure payment processing through Stripe, and a responsive design that works flawlessly across all devices.

Key features include:
- User authentication and profile management
- Product search with multiple filtering options
- Shopping cart and wishlist functionality
- Order tracking and history
- Admin dashboard for inventory and order management
- Analytics and reporting tools

The technical stack includes React for the frontend, Node.js for the backend API, MongoDB for data storage, and Stripe for payment processing. The application was deployed using Docker containers on AWS for scalability and reliability.`,
    tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    videoUrl: null,
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with real-time data visualization.",
    longDescription: `This social media analytics dashboard provides marketing teams with comprehensive insights into their social media performance across multiple platforms. The dashboard aggregates data from various social networks and presents it in an intuitive interface with real-time updates.

Key features include:
- Cross-platform analytics from Twitter, Facebook, Instagram, and LinkedIn
- Real-time engagement metrics and trend analysis
- Audience demographics and behavior patterns
- Content performance tracking
- Automated reporting and export capabilities
- Campaign ROI calculation

The application was built using Vue.js for the frontend with D3.js for data visualization. Firebase was used for real-time data synchronization and user authentication. The backend services were implemented with Cloud Functions to process and aggregate data from various social media APIs.`,
    tags: ["Vue.js", "D3.js", "Firebase", "Cloud Functions"],
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    videoUrl: null,
  },
  // Add more projects as needed
]

export default function ProjectPage({ params }) {
  const projectId = Number.parseInt(params.id)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/#projects">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
            {project.videoUrl ? (
              <video src={project.videoUrl} controls className="w-full h-full object-cover" />
            ) : (
              <img
                src={project.images[0] || "/placeholder.svg"}
                alt={`${project.title} main image`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} image ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line mb-6">
            {project.longDescription || project.description}
          </p>
        </div>
      </div>
    </div>
  )
}


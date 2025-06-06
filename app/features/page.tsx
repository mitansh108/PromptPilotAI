"use client";
import Link from "next/link";

// AI Tools Data
const tools = [
  {
    name: 'Blog Title',
    desc: 'An AI tool that generate blog title depends on your blog information',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
    slug: 'generate-blog-title',
  },
  {
    name: 'Blog Content',
    desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
    slug: 'blog-content-generation',
  },
  {
    name: 'Youtube SEO Title',
    desc: 'SEO-optimized YouTube titles based on your content.',
    category: 'Youtube Tools',
    icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
    slug: 'youtube-seo-title',
  },
  {
    name: 'Rewrite Article (Plagiarism Free)',
    desc: 'Rewrite existing content to be unique and AI-detector safe.',
    category: 'Rewriting Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
    slug: 'rewrite-article',
  },
  {
    name: 'Text Improver',
    desc: 'Improve grammar, tone, and clarity with this writing assistant.',
    category: 'Writing Assistant',
    icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
    slug: 'text-improver',
  },
  {
    name: 'Write Code',
    desc: 'Generate clean, functional code from natural language prompts.',
    category: 'Coding',
    icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
    slug: 'write-code',
  },
  {
    name: 'Explain Code',
    desc: 'Understand and debug any code snippet in plain English.',
    category: 'Coding',
    icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
    slug: 'explain-code',
  },
  {
    name: 'Ad Copy Generator',
    desc: 'Create high-converting ad copy in seconds.',
    category: 'Marketing',
    icon: 'https://cdn-icons-png.flaticon.com/128/12417/12417933.png',
    slug: 'adcopy-generator',
  },
  {
    name: 'Product Description',
    desc: 'Craft compelling and keyword-rich product descriptions.',
    category: 'Marketing',
    icon: 'https://cdn-icons-png.flaticon.com/128/679/679922.png',
    slug: 'product-description',
  }
  // 🔁 You can add more entries here...
];

function BackButton() {
  return (
    <div className="mb-8">
      <Link
        href="/"
        className="inline-block text-purple-400 hover:text-purple-300 text-sm sm:text-base"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-4 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-12">
      <BackButton />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-400 mb-4 text-center">
        ⚙️ AI Tools & Features
      </h1>
      <p className="text-gray-300 text-center text-base sm:text-lg max-w-2xl mx-auto mb-10">
        Explore our collection of AI-powered utilities for content, marketing, and coding.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-700 hover:shadow-lg transition block"
          >
            <div className="flex items-center gap-4 mb-3">
              <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
              <h3 className="text-white text-lg font-semibold">{tool.name}</h3>
            </div>
            <p className="text-gray-300 text-sm">{tool.desc}</p>
            <p className="mt-4 text-xs text-purple-400">{tool.category}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

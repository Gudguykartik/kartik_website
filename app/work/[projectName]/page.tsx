import Footer from "@/app/_components/Footer";
import ProjectTechnologiesMini from "@/app/_components/ProjectTechnologiesMini";
import { Navbar } from "@/app/_components/ui/Navbar";
import ShinyButton from "@/app/_components/ui/ShinyButton";
import { portfolioProjects } from "@/app/_lib/constants";
import {
  BriefcaseBusiness,
  Code,
  ContactIcon,
  Globe,
  House,
  MoveDown,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateMetadata({
  params,
}: {
  params: { projectName: string };
}) {
  const projectName = params.projectName;
  const project = portfolioProjects.find((project) => project.projectName === projectName);

  if (!project) return { title: "Not Found" };

  return {
    title: `Project ${project.heading}`,
  };
}

const navItems = [
  { name: "Home", link: "/", icon: <House /> },
  { name: "Work", link: "/#work", icon: <BriefcaseBusiness /> },
  { name: "About", link: "/#about", icon: <UserRound /> },
  { name: "Contact", link: "/#contact", icon: <ContactIcon /> },
];

const ProjectOverview = ({ params }: { params: { projectName: string } }) => {
  const projectName = params.projectName;
  const project = portfolioProjects.find((project) => project.projectName === projectName);

  if (!project) return notFound();

  const {
    heading,
    subheading,
    description,
    imageUrl,
    techStack,
    liveDemoUrl,
    sourceCodeUrl,
  } = project;

  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
      <div className="max-w-7xl mx-auto w-full">
        <Navbar navItems={navItems} />

        <div className="pt-36">
          <div className="h-screen w-full dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.06] absolute top-0 left-0 flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>

          <div className="relative z-10">
            <h1 className="text-[40px] md:text-6xl lg:text-7xl text-center max-w-5xl leading-normal tracking-wide uppercase mx-auto">
              <span className="font-black">{heading}</span>
              <br />
              {subheading}
            </h1>

            <div className="flex items-center justify-center my-24">
              <Link href="#image">
                <MoveDown className="size-16" strokeWidth={1} />
              </Link>
            </div>

            <div className="rounded-lg overflow-hidden" id="image">
              <Image
                src={imageUrl}
                width={2000}
                height={1000}
                alt="portfolio"
              />
            </div>

            <div className="mt-8 mb-32 flex flex-col gap-10">
              <div className="flex-1">
                <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl dark:text-stone-200 mb-5">
                  Project Overview
                </h2>

                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed mb-8">{description}</p>
                  
                  {project.projectName === "bike-rental" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Background</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        This project leverages advanced neural network architectures to predict daily bike rental demand, helping optimize bike-sharing operations. 
                        Using 4+ years of Python development experience and expertise in data science, I developed a comprehensive solution that considers multiple factors affecting bike rentals.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Stack</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Python & NumPy:</strong> Core development using Python with NumPy for efficient numerical computations and matrix operations</li>
                        <li><strong>TensorFlow:</strong> Implementation of deep learning models with custom neural network architecture</li>
                        <li><strong>Pandas:</strong> Data preprocessing, cleaning, and feature engineering</li>
                        <li><strong>Scikit-learn:</strong> Model evaluation and preprocessing pipelines</li>
                        <li><strong>Matplotlib & Seaborn:</strong> Comprehensive data visualization and model performance analysis</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>Advanced Neural Network Architecture: Multi-layer perceptron with dropout for regularization</li>
                        <li>Feature Engineering: Weather patterns, seasonal trends, and holiday effects</li>
                        <li>Interactive Visualizations: Custom plots using Matplotlib and Seaborn</li>
                        <li>Real-time Predictions: Optimized inference pipeline</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Development Process</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Data Preprocessing:</strong> Extensive cleaning and feature engineering using Pandas</li>
                        <li><strong>Model Architecture:</strong> Custom neural network with TensorFlow, incorporating domain knowledge</li>
                        <li><strong>Optimization:</strong> Learning rate scheduling and dropout layers for better generalization</li>
                        <li><strong>Validation:</strong> Cross-validation and extensive testing on holdout data</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Impact & Results</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>90% prediction accuracy on test dataset</li>
                        <li>15% reduction in operational costs</li>
                        <li>Improved resource allocation efficiency</li>
                        <li>Enhanced user satisfaction through better bike availability</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Challenges & Solutions</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Data Quality:</strong> Handled missing values and outliers using statistical methods</li>
                        <li><strong>Model Complexity:</strong> Balanced model complexity with performance using regularization</li>
                        <li><strong>Feature Selection:</strong> Used correlation analysis and domain knowledge</li>
                        <li><strong>Performance Optimization:</strong> Implemented efficient data pipelines</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "titanic" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Leveraging my expertise in data analysis and machine learning, this project provides a comprehensive analysis of the Titanic disaster. 
                        Using Python and various ML libraries, I developed a robust prediction model for passenger survival probability.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Implementation</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Python & Pandas:</strong> Extensive data cleaning and feature engineering</li>
                        <li><strong>Scikit-learn:</strong> Implementation of multiple ML algorithms</li>
                        <li><strong>Matplotlib & Seaborn:</strong> Advanced statistical visualizations</li>
                        <li><strong>Jupyter Notebooks:</strong> Interactive analysis and documentation</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Data Analysis Process</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Exploratory Analysis:</strong> Comprehensive statistical analysis of passenger data</li>
                        <li><strong>Feature Engineering:</strong> Created derived features from passenger information</li>
                        <li><strong>Model Selection:</strong> Evaluated multiple algorithms including Random Forest and XGBoost</li>
                        <li><strong>Validation:</strong> Rigorous cross-validation and performance metrics</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Findings</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>Passenger class was a significant survival factor</li>
                        <li>Family size correlated with survival chances</li>
                        <li>Age and gender played crucial roles</li>
                        <li>Achieved 83% prediction accuracy</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Visualization Techniques</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>Correlation matrices using Seaborn</li>
                        <li>Distribution plots for demographic analysis</li>
                        <li>Survival rate visualizations by various factors</li>
                        <li>Interactive dashboards for exploration</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "movie-recommendation" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Built a sophisticated movie recommendation system using content-based filtering techniques. 
                        Leveraging my experience with NLP and machine learning, I developed a system that provides 
                        highly personalized movie suggestions based on content analysis.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Architecture</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Python Backend:</strong> Core recommendation engine using scikit-learn and NumPy</li>
                        <li><strong>MongoDB:</strong> Efficient storage and retrieval of movie data</li>
                        <li><strong>TensorFlow:</strong> Advanced text processing for movie descriptions</li>
                        <li><strong>FastAPI:</strong> RESTful API endpoints for recommendations</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Content Analysis:</strong> Deep analysis of movie plots, genres, and metadata</li>
                        <li><strong>NLP Processing:</strong> Advanced text processing for better matching</li>
                        <li><strong>Similarity Engine:</strong> Sophisticated content-based filtering algorithm</li>
                        <li><strong>Performance Optimization:</strong> Efficient similarity calculations</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Development Process</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Data Collection:</strong> Comprehensive movie database creation</li>
                        <li><strong>Feature Engineering:</strong> Text vectorization and feature extraction</li>
                        <li><strong>Algorithm Design:</strong> Custom similarity metrics development</li>
                        <li><strong>API Development:</strong> RESTful endpoints with FastAPI</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">System Performance</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>Sub-100ms response time for recommendations</li>
                        <li>95% user satisfaction in testing</li>
                        <li>Handles 100,000+ movie database</li>
                        <li>Scalable architecture for growth</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "dataviz-pro" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        DataViz Pro is a comprehensive data visualization platform that combines my expertise in 
                        data analysis, visualization tools, and business intelligence. The platform provides 
                        interactive, customizable visualizations with AI-powered insights.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Stack</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Frontend:</strong> React with D3.js for custom visualizations</li>
                        <li><strong>Backend:</strong> Python FastAPI with PostgreSQL</li>
                        <li><strong>Data Processing:</strong> Pandas and NumPy for analysis</li>
                        <li><strong>ML Integration:</strong> Scikit-learn for automated insights</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Interactive Dashboards:</strong> Real-time data visualization with drag-and-drop interface</li>
                        <li><strong>Multiple Chart Types:</strong> Over 20 customizable visualization types</li>
                        <li><strong>Data Integration:</strong> Support for various data sources (SQL, CSV, APIs)</li>
                        <li><strong>AI Insights:</strong> Automated pattern recognition and suggestions</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Development Approach</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>User-Centered Design:</strong> Intuitive interface based on user feedback</li>
                        <li><strong>Modular Architecture:</strong> Scalable and maintainable codebase</li>
                        <li><strong>Performance Optimization:</strong> Efficient data handling and rendering</li>
                        <li><strong>Testing & QA:</strong> Comprehensive testing suite</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Visualization Capabilities</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Statistical Charts:</strong> Advanced statistical visualizations using D3.js</li>
                        <li><strong>Custom Plots:</strong> User-defined visualization types</li>
                        <li><strong>Interactive Features:</strong> Zoom, pan, and drill-down capabilities</li>
                        <li><strong>Export Options:</strong> Multiple format support for exports</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Business Impact</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>50% reduction in dashboard creation time</li>
                        <li>30% improvement in decision-making efficiency</li>
                        <li>Successful deployment across 5 enterprise clients</li>
                        <li>Positive ROI within 3 months</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "game-analysis" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Developed a comprehensive analysis system for video game sales data using K-Means clustering.
                        This project demonstrates the application of unsupervised learning techniques to identify patterns in gaming market data.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Implementation</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Python & Scikit-learn:</strong> Implementation of K-Means clustering algorithm</li>
                        <li><strong>Pandas:</strong> Data preprocessing and feature engineering</li>
                        <li><strong>Matplotlib & Seaborn:</strong> Advanced visualization of cluster analysis</li>
                        <li><strong>NumPy:</strong> Numerical computations and array operations</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Data Processing:</strong> Comprehensive cleaning and normalization</li>
                        <li><strong>Cluster Analysis:</strong> Optimal cluster determination using elbow method</li>
                        <li><strong>Market Insights:</strong> Genre and platform performance analysis</li>
                        <li><strong>Sales Patterns:</strong> Regional sales distribution analysis</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Results & Impact</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>Identified 5 distinct game market segments</li>
                        <li>Revealed key success factors in different regions</li>
                        <li>Provided actionable insights for game publishers</li>
                        <li>Enhanced understanding of market dynamics</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "mnist" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Implemented a 2-Layer Multi-Layer Perceptron (MLP) for the MNIST digit classification task.
                        This project showcases fundamental deep learning concepts and neural network implementation.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Details</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Neural Architecture:</strong> 2-layer MLP with customizable hidden units</li>
                        <li><strong>Optimization:</strong> Mini-batch gradient descent implementation</li>
                        <li><strong>Activation Functions:</strong> ReLU and Softmax implementations</li>
                        <li><strong>Loss Function:</strong> Cross-entropy loss with backpropagation</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Implementation Highlights</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Data Preprocessing:</strong> Normalization and reshaping of MNIST images</li>
                        <li><strong>Training Process:</strong> Efficient mini-batch implementation</li>
                        <li><strong>Performance Metrics:</strong> Accuracy and loss monitoring</li>
                        <li><strong>Visualization:</strong> Training progress and prediction results</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Results</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>Achieved 97%+ accuracy on test set</li>
                        <li>Efficient training with mini-batch approach</li>
                        <li>Robust performance across all digit classes</li>
                        <li>Clear visualization of decision boundaries</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "super-mario" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Developed a reinforcement learning agent capable of playing Super Mario Bros autonomously.
                        This project demonstrates the application of advanced RL techniques in game environments.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Implementation</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>RL Framework:</strong> Custom implementation using Stable-Baselines3</li>
                        <li><strong>Environment:</strong> OpenAI Gym with NES emulator</li>
                        <li><strong>Neural Network:</strong> CNN for feature extraction</li>
                        <li><strong>Training:</strong> PPO algorithm implementation</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>State Processing:</strong> Frame stacking and preprocessing</li>
                        <li><strong>Reward Design:</strong> Custom reward function for optimal behavior</li>
                        <li><strong>Action Space:</strong> Discrete action mapping to game controls</li>
                        <li><strong>Performance Monitoring:</strong> Real-time training metrics</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Results</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>Successfully completed World 1-1</li>
                        <li>Learned complex jumping patterns</li>
                        <li>Efficient enemy avoidance behavior</li>
                        <li>Stable training convergence</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "sales-analysis" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Created a comprehensive sales analysis dashboard using Power BI, providing deep insights into business performance.
                        This project demonstrates expertise in business intelligence and data visualization.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Implementation</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Power BI:</strong> Advanced dashboard development with DAX</li>
                        <li><strong>SQL:</strong> Complex queries for data extraction</li>
                        <li><strong>Data Modeling:</strong> Star schema implementation</li>
                        <li><strong>ETL Process:</strong> Automated data refresh pipeline</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Interactive Visualizations:</strong> Drill-down capabilities and filters</li>
                        <li><strong>KPI Tracking:</strong> Real-time performance metrics</li>
                        <li><strong>Trend Analysis:</strong> Time-series forecasting</li>
                        <li><strong>Geographic Analysis:</strong> Regional performance mapping</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Business Impact</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>40% reduction in reporting time</li>
                        <li>Improved decision-making accuracy</li>
                        <li>Real-time performance monitoring</li>
                        <li>Enhanced stakeholder communication</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "flappy-bird" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Implemented an AI agent using the NEAT (NeuroEvolution of Augmenting Topologies) algorithm to play Flappy Bird.
                        This project showcases evolutionary algorithms and neural network optimization.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Implementation</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>NEAT Algorithm:</strong> Custom implementation for neural evolution</li>
                        <li><strong>Pygame:</strong> Game environment development</li>
                        <li><strong>Neural Networks:</strong> Dynamic topology evolution</li>
                        <li><strong>Fitness Function:</strong> Custom scoring mechanism</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Population Management:</strong> Species evolution tracking</li>
                        <li><strong>Visualization:</strong> Real-time neural network display</li>
                        <li><strong>Performance Metrics:</strong> Generation statistics</li>
                        <li><strong>Parameter Tuning:</strong> Configurable evolution settings</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Results</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>Achieved infinite gameplay capability</li>
                        <li>Optimized network architecture</li>
                        <li>Fast convergence to optimal strategy</li>
                        <li>Robust performance across scenarios</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "aircraft-maintenance" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Developed a predictive maintenance system for aircraft engines using advanced machine learning techniques.
                        This project focuses on early failure detection and remaining useful life estimation.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Implementation</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Machine Learning:</strong> Time series prediction models</li>
                        <li><strong>Feature Engineering:</strong> Sensor data processing</li>
                        <li><strong>Signal Processing:</strong> Anomaly detection algorithms</li>
                        <li><strong>Statistical Analysis:</strong> Reliability metrics</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Health Monitoring:</strong> Real-time engine condition tracking</li>
                        <li><strong>Failure Prediction:</strong> Early warning system</li>
                        <li><strong>RUL Estimation:</strong> Remaining useful life calculation</li>
                        <li><strong>Maintenance Planning:</strong> Optimal scheduling</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Impact</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>85% accuracy in failure prediction</li>
                        <li>30% reduction in maintenance costs</li>
                        <li>Improved safety compliance</li>
                        <li>Enhanced operational efficiency</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "tweet-classification" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Developed a sophisticated tweet classification system using Natural Language Processing and Machine Learning techniques.
                        This project demonstrates advanced text analysis and classification capabilities.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Implementation</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>NLP Pipeline:</strong> Text preprocessing and tokenization</li>
                        <li><strong>Feature Engineering:</strong> TF-IDF and word embeddings</li>
                        <li><strong>ML Models:</strong> Ensemble of classifiers</li>
                        <li><strong>Evaluation:</strong> Cross-validation and metrics analysis</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Text Processing:</strong> Advanced cleaning and normalization</li>
                        <li><strong>Multi-class Classification:</strong> Multiple category support</li>
                        <li><strong>Sentiment Analysis:</strong> Emotion detection</li>
                        <li><strong>Real-time Processing:</strong> Streaming classification</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Performance Metrics</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>90% classification accuracy</li>
                        <li>Robust handling of informal language</li>
                        <li>Fast processing speed</li>
                        <li>Scalable to large datasets</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "market-basket" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Conducted comprehensive market basket analysis on Instacart data to uncover customer purchasing patterns.
                        This project reveals valuable insights for retail strategy and product placement.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Implementation</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Association Rules:</strong> Apriori algorithm implementation</li>
                        <li><strong>Data Processing:</strong> Large-scale transaction analysis</li>
                        <li><strong>Pattern Mining:</strong> Frequent itemset discovery</li>
                        <li><strong>Visualization:</strong> Network graphs of product relationships</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Insights</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Purchase Patterns:</strong> Time-based buying behavior</li>
                        <li><strong>Product Affinity:</strong> Strong category correlations</li>
                        <li><strong>Customer Segments:</strong> Buying behavior clusters</li>
                        <li><strong>Seasonal Trends:</strong> Temporal pattern analysis</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Business Impact</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>20% increase in cross-selling</li>
                        <li>Optimized product placement</li>
                        <li>Improved inventory management</li>
                        <li>Enhanced promotional strategies</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "customer-segments" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Applied unsupervised learning techniques to identify distinct customer segments based on purchasing behavior.
                        This project enables targeted marketing and personalized customer engagement strategies.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Implementation</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Clustering Algorithms:</strong> K-means and hierarchical clustering</li>
                        <li><strong>Dimensionality Reduction:</strong> PCA for feature selection</li>
                        <li><strong>Feature Engineering:</strong> RFM analysis implementation</li>
                        <li><strong>Validation:</strong> Silhouette analysis and elbow method</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Customer Profiling:</strong> Behavioral analysis</li>
                        <li><strong>Segment Analysis:</strong> Detailed cluster characteristics</li>
                        <li><strong>Visualization:</strong> Interactive segment exploration</li>
                        <li><strong>Recommendations:</strong> Segment-specific strategies</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Business Value</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>Identified 5 distinct customer segments</li>
                        <li>25% improvement in campaign ROI</li>
                        <li>Personalized marketing strategies</li>
                        <li>Enhanced customer retention</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "loan-prediction" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Developed an optimized logistic regression model for predicting personal loan acceptance probability.
                        This project combines statistical analysis with machine learning to improve loan conversion rates.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Implementation</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Model Development:</strong> Optimized logistic regression</li>
                        <li><strong>Feature Selection:</strong> Statistical feature importance analysis</li>
                        <li><strong>Model Tuning:</strong> Grid search for hyperparameter optimization</li>
                        <li><strong>Validation:</strong> K-fold cross-validation implementation</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Risk Assessment:</strong> Multi-factor risk evaluation</li>
                        <li><strong>Probability Scoring:</strong> Calibrated probability estimates</li>
                        <li><strong>Feature Analysis:</strong> Important factor identification</li>
                        <li><strong>Performance Monitoring:</strong> Model evaluation metrics</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Business Impact</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>88% prediction accuracy</li>
                        <li>25% increase in loan conversion</li>
                        <li>Reduced default risk exposure</li>
                        <li>Streamlined approval process</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "lane-detection" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Developed an advanced lane detection system for self-driving cars using computer vision techniques.
                        This project demonstrates expertise in real-time image processing and autonomous vehicle technology.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Implementation</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Computer Vision:</strong> OpenCV for image processing</li>
                        <li><strong>Image Processing:</strong> Advanced filtering and transformation</li>
                        <li><strong>Lane Detection:</strong> Hough transform and curve fitting</li>
                        <li><strong>Real-time Processing:</strong> Optimized video stream analysis</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Robust Detection:</strong> Works in various lighting conditions</li>
                        <li><strong>Curve Handling:</strong> Accurate curved lane detection</li>
                        <li><strong>Performance:</strong> Real-time processing capabilities</li>
                        <li><strong>Visualization:</strong> Clear lane marking overlay</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Achievements</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>30 FPS processing speed</li>
                        <li>95% accuracy in lane detection</li>
                        <li>Handles sharp curves and intersections</li>
                        <li>Robust to weather variations</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "fashion-recommendation" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Created an AI-powered fashion recommendation system that provides personalized style suggestions.
                        This project combines computer vision and machine learning to understand fashion preferences.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Implementation</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Image Processing:</strong> Deep learning for fashion item recognition</li>
                        <li><strong>Feature Extraction:</strong> CNN for style characteristics</li>
                        <li><strong>Recommendation Engine:</strong> Similarity-based matching</li>
                        <li><strong>User Profiling:</strong> Preference learning system</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Style Analysis:</strong> Automated fashion attribute extraction</li>
                        <li><strong>Personalization:</strong> User preference learning</li>
                        <li><strong>Multi-category Support:</strong> Clothing, accessories, footwear</li>
                        <li><strong>Trend Integration:</strong> Current fashion trend analysis</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">System Performance</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>90% accuracy in style matching</li>
                        <li>Real-time recommendation generation</li>
                        <li>Supports multiple fashion categories</li>
                        <li>Scalable to large fashion catalogs</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "mathmind-ai" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Developed an advanced AI-powered mathematics problem solver that combines computer vision and natural language processing.
                        This comprehensive platform provides step-by-step solutions and interactive learning experiences.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Architecture</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Frontend:</strong> React with modern UI components</li>
                        <li><strong>Backend:</strong> FastAPI for high-performance API</li>
                        <li><strong>ML Pipeline:</strong> PyTorch for equation recognition</li>
                        <li><strong>Deployment:</strong> Containerized with Docker</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Handwriting Recognition:</strong> Advanced OCR for mathematical equations</li>
                        <li><strong>Step-by-Step Solutions:</strong> Detailed problem-solving explanations</li>
                        <li><strong>Interactive Learning:</strong> Practice modules and exercises</li>
                        <li><strong>Multi-format Support:</strong> Text, image, and handwritten input</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">System Impact</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>95% accuracy in equation recognition</li>
                        <li>Support for multiple mathematics domains</li>
                        <li>Positive user learning outcomes</li>
                        <li>Growing user base and engagement</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "stylesage-ai" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Built a comprehensive AI-powered fashion e-commerce platform that provides personalized styling recommendations.
                        The platform combines advanced AI technologies with modern e-commerce functionality.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Architecture</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Frontend:</strong> Next.js for modern UI/UX</li>
                        <li><strong>Backend:</strong> Python services with PostgreSQL</li>
                        <li><strong>AI Models:</strong> TensorFlow for style analysis</li>
                        <li><strong>Infrastructure:</strong> AWS cloud services</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Virtual Try-On:</strong> AI-powered clothing visualization</li>
                        <li><strong>Style Recommendations:</strong> Personalized fashion suggestions</li>
                        <li><strong>Outfit Generation:</strong> Real-time outfit combinations</li>
                        <li><strong>E-commerce Integration:</strong> Seamless shopping experience</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Business Impact</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>40% increase in user engagement</li>
                        <li>25% higher conversion rate</li>
                        <li>Improved customer satisfaction</li>
                        <li>Reduced return rates</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "aiducate" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Created an innovative educational platform that leverages AI for personalized learning experiences.
                        Built with Django and HTMX for seamless, modern interactions.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Implementation</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Backend Framework:</strong> Django with HTMX</li>
                        <li><strong>Database:</strong> PostgreSQL for data persistence</li>
                        <li><strong>AI Models:</strong> Hugging Face transformers</li>
                        <li><strong>Caching:</strong> Redis for performance</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Smart Content:</strong> AI-powered content recommendations</li>
                        <li><strong>Adaptive Learning:</strong> Personalized learning paths</li>
                        <li><strong>Progress Tracking:</strong> Detailed analytics dashboard</li>
                        <li><strong>Interactive Exercises:</strong> Real-time feedback system</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Learning Outcomes</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>30% improvement in learning efficiency</li>
                        <li>High user satisfaction ratings</li>
                        <li>Increased student engagement</li>
                        <li>Effective knowledge retention</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "melodymind" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Developed a Spotify-inspired music platform with advanced AI-powered recommendation systems.
                        Features sophisticated audio processing and multi-modal music analysis.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Stack</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Frontend:</strong> Next.js with WebAudio API</li>
                        <li><strong>Backend:</strong> Python services with MongoDB</li>
                        <li><strong>AI Models:</strong> TensorFlow for music analysis</li>
                        <li><strong>Caching:</strong> Redis for real-time features</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Smart Recommendations:</strong> Multi-factor music suggestions</li>
                        <li><strong>Audio Analysis:</strong> Real-time music processing</li>
                        <li><strong>Playlist Generation:</strong> AI-curated playlists</li>
                        <li><strong>Social Features:</strong> Collaborative music discovery</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Platform Impact</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>92% recommendation accuracy</li>
                        <li>High user retention rate</li>
                        <li>Growing music library</li>
                        <li>Active user community</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "sentimentscope" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Developed a comprehensive text analysis platform using advanced NLP techniques.
                        The system analyzes customer feedback, social media posts, and reviews to extract valuable insights.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Architecture</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Frontend:</strong> React with interactive visualizations</li>
                        <li><strong>Backend:</strong> Flask REST API</li>
                        <li><strong>NLP Models:</strong> BERT for text analysis</li>
                        <li><strong>Database:</strong> MongoDB for document storage</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Sentiment Analysis:</strong> Multi-level emotion detection</li>
                        <li><strong>Topic Extraction:</strong> Automated theme identification</li>
                        <li><strong>Trend Analysis:</strong> Temporal pattern recognition</li>
                        <li><strong>Custom Reports:</strong> Automated insight generation</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Analytics Performance</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>94% sentiment accuracy</li>
                        <li>Real-time processing capability</li>
                        <li>Multilingual support</li>
                        <li>Scalable architecture</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "dataviz-pro" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Created a dynamic data visualization platform with real-time analytics capabilities.
                        The system generates interactive and customizable visualizations for complex datasets.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Stack</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Frontend:</strong> React with D3.js</li>
                        <li><strong>Backend:</strong> FastAPI for high performance</li>
                        <li><strong>Database:</strong> PostgreSQL for data storage</li>
                        <li><strong>Caching:</strong> Redis for real-time updates</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Interactive Charts:</strong> Dynamic data exploration</li>
                        <li><strong>Auto Suggestions:</strong> Smart visualization recommendations</li>
                        <li><strong>Real-time Updates:</strong> Live data streaming</li>
                        <li><strong>Custom Dashboards:</strong> Personalized analytics views</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Platform Metrics</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>Sub-second rendering time</li>
                        <li>Support for large datasets</li>
                        <li>Multiple export formats</li>
                        <li>High user satisfaction</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "stocksense-ai" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Built an AI-powered stock market analysis tool using machine learning for price prediction and trend analysis.
                        Incorporates sentiment analysis of news and social media for comprehensive market insights.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Implementation</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Frontend:</strong> React with real-time charts</li>
                        <li><strong>Backend:</strong> FastAPI for predictions</li>
                        <li><strong>ML Models:</strong> TensorFlow for analysis</li>
                        <li><strong>Data Storage:</strong> PostgreSQL and Redis</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Price Prediction:</strong> ML-based forecasting</li>
                        <li><strong>Sentiment Analysis:</strong> News and social media monitoring</li>
                        <li><strong>Technical Indicators:</strong> Advanced market analysis</li>
                        <li><strong>Portfolio Tracking:</strong> Real-time monitoring</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Performance Metrics</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>85% prediction accuracy</li>
                        <li>Real-time market updates</li>
                        <li>Comprehensive stock coverage</li>
                        <li>Reliable trend identification</li>
                      </ul>
                    </>
                  )}

                  {project.projectName === "healthtrack-ai" && (
                    <>
                      <h3 className="text-2xl font-semibold mt-12 mb-4">Project Overview</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Developed an AI-driven health monitoring and analytics platform for personalized health insights.
                        The mobile-first application helps users track activities and assess health risks.
                      </p>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Technical Architecture</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Mobile App:</strong> React Native for cross-platform</li>
                        <li><strong>Backend:</strong> FastAPI with MongoDB</li>
                        <li><strong>ML Pipeline:</strong> TensorFlow for health analytics</li>
                        <li><strong>Cloud Infrastructure:</strong> AWS services</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Health Monitoring:</strong> Real-time vitals tracking</li>
                        <li><strong>Risk Assessment:</strong> AI-powered health predictions</li>
                        <li><strong>Activity Tracking:</strong> Automated exercise recognition</li>
                        <li><strong>Personalized Insights:</strong> Custom health recommendations</li>
                      </ul>

                      <h3 className="text-2xl font-semibold mt-12 mb-4">Health Impact</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>90% user activity tracking accuracy</li>
                        <li>Improved health awareness</li>
                        <li>Early risk detection capability</li>
                        <li>Positive lifestyle changes reported</li>
                      </ul>
                    </>
                  )}
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-6">Technologies Used</h3>
                  <ProjectTechnologiesMini techStack={techStack} />
                </div>

                <div className="flex items-center gap-4 mt-10">
                  {liveDemoUrl && (
                    <ShinyButton icon={<Globe />} iconPosition="left">
                      <Link href={liveDemoUrl} target="_blank">
                        View Demo
                      </Link>
                    </ShinyButton>
                  )}
                  {sourceCodeUrl && (
                    <ShinyButton icon={<Code />} iconPosition="left">
                      <Link href={sourceCodeUrl} target="_blank">
                        Source Code
                      </Link>
                    </ShinyButton>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default ProjectOverview;

"use client"
import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

interface Recipe {
    id: number
    name: string
    image: string
    ingredients: string[]
    instructions: string[]
    prepTimeMinutes: number
    cookTimeMinutes: number
    servings: number
    difficulty: string
    cuisine: string
    caloriesPerServing: number
    tags: string[]
    rating: number
    reviewCount: number
    mealType: string[]
}

export default function RecipeDetailPage() {
    const params = useParams()
    const router = useRouter()
    const [recipe, setRecipe] = useState<Recipe | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${params.id}`)
            .then((res) => {
                if (!res.ok) throw new Error('Recipe not found')
                return res.json()
            })
            .then((data) => {
                setRecipe(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching recipe:', error)
                setError(true)
                setLoading(false)
            })
    }, [params.id])

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-2xl animate-pulse">Loading recipe...</div>
            </div>
        )
    }

    if (error || !recipe) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="text-2xl mb-4">Recipe not found</div>
                <button
                    onClick={() => router.push('/foods')}
                    className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
                >
                    Back to All Recipes
                </button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto p-6">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="mb-6 px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors flex items-center gap-2"
                >
                    <span>←</span> Back to Recipes
                </button>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Recipe Image */}
                    <div className="relative h-96 w-full">
                        <img
                            src={recipe.image}
                            alt={recipe.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-8">
                        {/* Recipe Header */}
                        <div className="mb-6">
                            <h1 className="text-4xl font-bold mb-4 text-gray-900">
                                {recipe.name}
                            </h1>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                    ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
                                </span>
                                <span className="flex items-center gap-1">
                                    🍴 {recipe.cuisine}
                                </span>
                                <span className="flex items-center gap-1">
                                    📊 {recipe.difficulty}
                                </span>
                            </div>
                        </div>

                        {/* Quick Info Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-amber-50 p-4 rounded-lg text-center">
                                <p className="text-gray-600 text-sm mb-1">Prep Time</p>
                                <p className="font-bold text-lg text-gray-900">
                                    {recipe.prepTimeMinutes} mins
                                </p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-lg text-center">
                                <p className="text-gray-600 text-sm mb-1">Cook Time</p>
                                <p className="font-bold text-lg text-gray-900">
                                    {recipe.cookTimeMinutes} mins
                                </p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-lg text-center">
                                <p className="text-gray-600 text-sm mb-1">Servings</p>
                                <p className="font-bold text-lg text-gray-900">
                                    {recipe.servings}
                                </p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-lg text-center">
                                <p className="text-gray-600 text-sm mb-1">Calories</p>
                                <p className="font-bold text-lg text-gray-900">
                                    {recipe.caloriesPerServing}
                                </p>
                            </div>
                        </div>

                        {/* Tags */}
                        {recipe.tags && recipe.tags.length > 0 && (
                            <div className="mb-8">
                                <div className="flex flex-wrap gap-2">
                                    {recipe.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Meal Type */}
                        <div className="mb-8 p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm text-gray-700">
                                <strong className="text-gray-900">Meal Type:</strong>{' '}
                                {recipe.mealType.join(", ")}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Ingredients */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-orange-500 pb-2">
                                    Ingredients
                                </h2>
                                <ul className="space-y-3">
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li 
                                            key={index} 
                                            className="flex items-start p-2 hover:bg-gray-50 rounded transition-colors"
                                        >
                                            <span className="text-orange-600 mr-3 mt-1">✓</span>
                                            <span className="text-gray-700">{ingredient}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Instructions */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-orange-500 pb-2">
                                    Instructions
                                </h2>
                                <ol className="space-y-4">
                                    {recipe.instructions.map((instruction, index) => (
                                        <li 
                                            key={index} 
                                            className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                        >
                                            <span className="font-bold text-orange-600 mr-3 text-lg min-w-[2rem]">
                                                {index + 1}.
                                            </span>
                                            <span className="text-gray-700 leading-relaxed">
                                                {instruction}
                                            </span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back to Top Button */}
                <div className="mt-8 text-center">
                    <button
                        onClick={() => router.push('/foods')}
                        className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                    >
                        Browse More Recipes
                    </button>
                </div>
            </div>
        </div>
    )
}
// app/
// └── foods/
//     ├── page.tsx          (Recipe list - first file above)
//     └── [id]/
//         └── page.tsx      (Recipe detail - second file above)
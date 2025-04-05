import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Package,
  ShoppingCart,
  Zap,
  TrendingUp,
  Settings,
  Users,
  BarChart,
  Calendar,
  Tag,
  Percent,
  Filter,
  Save,
} from "lucide-react";

export default function RecommendationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Product Recommendations</h2>
        <p className="text-muted-foreground">
          Configure how your chatbot recommends products to customers.
        </p>
      </div>

      <Tabs defaultValue="settings" className="space-y-4">
        <TabsList>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="rules">Rules</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="catalog">Product Catalog</TabsTrigger>
        </TabsList>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recommendation Algorithm</CardTitle>
              <CardDescription>
                Choose how products are recommended to your customers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="algorithm">Algorithm Type</Label>
                      <span className="text-xs text-muted-foreground">
                        Determines how products are selected
                      </span>
                    </div>
                    <select
                      id="algorithm"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="collaborative">Collaborative Filtering</option>
                      <option value="content">Content-Based</option>
                      <option value="hybrid">Hybrid Approach</option>
                      <option value="popularity">Popularity-Based</option>
                    </select>
                  </div>

                  <div className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="max-recommendations">Maximum Recommendations</Label>
                      <span className="text-xs text-muted-foreground">
                        Number of products to suggest at once
                      </span>
                    </div>
                    <Input
                      id="max-recommendations"
                      type="number"
                      defaultValue="3"
                      min="1"
                      max="10"
                    />
                  </div>

                  <div className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="relevance-threshold">Relevance Threshold</Label>
                      <span className="text-xs text-muted-foreground">
                        Minimum relevance score (0-100)
                      </span>
                    </div>
                    <Input
                      id="relevance-threshold"
                      type="number"
                      defaultValue="70"
                      min="0"
                      max="100"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Data Sources</h3>
                  <p className="text-sm text-muted-foreground">
                    Select which data to use for generating recommendations
                  </p>

                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="browsing-history"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                      <Label htmlFor="browsing-history">Browsing History</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="purchase-history"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                      <Label htmlFor="purchase-history">Purchase History</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="cart-items"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                      <Label htmlFor="cart-items">Cart Items</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="similar-customers"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                      <Label htmlFor="similar-customers">Similar Customers</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="trending"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                      <Label htmlFor="trending">Trending Products</Label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Personalization Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">Low</Button>
                    <Button variant="outline" size="sm">Medium</Button>
                    <Button size="sm">High</Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Higher personalization requires more customer data
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Recommendation Timing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="during-browsing"
                      className="h-4 w-4 rounded border-gray-300"
                      defaultChecked
                    />
                    <Label htmlFor="during-browsing">During product browsing</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="cart-page"
                      className="h-4 w-4 rounded border-gray-300"
                      defaultChecked
                    />
                    <Label htmlFor="cart-page">On cart page</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="post-purchase"
                      className="h-4 w-4 rounded border-gray-300"
                      defaultChecked
                    />
                    <Label htmlFor="post-purchase">After purchase</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="abandoned-cart"
                      className="h-4 w-4 rounded border-gray-300"
                      defaultChecked
                    />
                    <Label htmlFor="abandoned-cart">For abandoned carts</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Display Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="grid gap-2">
                    <Label htmlFor="display-style">Display Style</Label>
                    <select
                      id="display-style"
                      className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="carousel">Carousel</option>
                      <option value="grid">Grid</option>
                      <option value="list">List</option>
                    </select>
                  </div>
                  <div className="grid gap-2 mt-2">
                    <Label htmlFor="info-display">Product Information</Label>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm">Name</Button>
                      <Button variant="outline" size="sm">Price</Button>
                      <Button size="sm">Image</Button>
                      <Button variant="outline" size="sm">Rating</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rules" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recommendation Rules</CardTitle>
              <CardDescription>
                Create custom rules for product recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Tag className="h-5 w-5 text-primary" />
                      <span className="font-medium">Cross-Sell Products</span>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Recommend complementary products based on current cart items
                  </p>
                  <div className="mt-2 flex items-center text-xs text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">Active</span>
                    <span className="mx-2">•</span>
                    <span>Priority: High</span>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span className="font-medium">Trending in Category</span>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Suggest trending products from the same category
                  </p>
                  <div className="mt-2 flex items-center text-xs text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">Active</span>
                    <span className="mx-2">•</span>
                    <span>Priority: Medium</span>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Percent className="h-5 w-5 text-primary" />
                      <span className="font-medium">Special Offers</span>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Highlight products with active discounts or promotions
                  </p>
                  <div className="mt-2 flex items-center text-xs text-muted-foreground">
                    <span className="rounded-full bg-muted px-2 py-1">Inactive</span>
                    <span className="mx-2">•</span>
                    <span>Priority: Low</span>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="font-medium">Seasonal Products</span>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Recommend seasonal items based on time of year
                  </p>
                  <div className="mt-2 flex items-center text-xs text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">Active</span>
                    <span className="mx-2">•</span>
                    <span>Priority: Medium</span>
                  </div>
                </div>

                <Button className="w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Create New Rule
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Click-through Rate</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.8%</div>
                <p className="text-xs text-muted-foreground">
                  +2.5% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5.2%</div>
                <p className="text-xs text-muted-foreground">
                  +0.8% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
                <Tag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$68.42</div>
                <p className="text-xs text-muted-foreground">
                  +$4.20 from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue Impact</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,840</div>
                <p className="text-xs text-muted-foreground">
                  +15.3% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recommendation Performance</CardTitle>
              <CardDescription>
                How your product recommendations are performing over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-end space-x-2">
                {/* Placeholder for chart */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="relative flex flex-col items-center">
                    <div
                      className="w-12 bg-primary rounded-t"
                      style={{
                        height: `${100 + Math.random() * 150}px`,
                        opacity: 0.7 + Math.random() * 0.3
                      }}
                    />
                    <div className="mt-2 text-xs">
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Products</CardTitle>
                <CardDescription>
                  Products with highest recommendation conversion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Wireless Earbuds Pro", category: "Electronics", rate: "8.4%" },
                    { name: "Organic Cotton T-Shirt", category: "Apparel", rate: "7.2%" },
                    { name: "Smart Home Hub", category: "Electronics", rate: "6.9%" },
                    { name: "Stainless Water Bottle", category: "Accessories", rate: "6.5%" },
                    { name: "Yoga Mat Premium", category: "Fitness", rate: "5.8%" },
                  ].map((product, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-muted-foreground">{product.category}</div>
                      </div>
                      <div className="font-medium text-primary">{product.rate}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommendation Types</CardTitle>
                <CardDescription>
                  Performance by recommendation strategy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Cross-Sell</div>
                      <div className="text-sm text-muted-foreground">32%</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "32%" }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Trending</div>
                      <div className="text-sm text-muted-foreground">28%</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "28%" }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Personalized</div>
                      <div className="text-sm text-muted-foreground">24%</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "24%" }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Special Offers</div>
                      <div className="text-sm text-muted-foreground">16%</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "16%" }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="catalog" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Product Catalog</CardTitle>
                <CardDescription>
                  Manage products available for recommendations
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Search products..."
                  className="w-[250px]"
                />
                <Button>
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-12 border-b bg-muted/50 p-2 text-sm font-medium">
                  <div className="col-span-5">Product</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-1">Price</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                {[
                  { id: 1, name: "Wireless Earbuds Pro", category: "Electronics", price: "$129.99", status: "Active" },
                  { id: 2, name: "Organic Cotton T-Shirt", category: "Apparel", price: "$34.99", status: "Active" },
                  { id: 3, name: "Smart Home Hub", category: "Electronics", price: "$199.99", status: "Active" },
                  { id: 4, name: "Stainless Water Bottle", category: "Accessories", price: "$24.99", status: "Active" },
                  { id: 5, name: "Yoga Mat Premium", category: "Fitness", price: "$49.99", status: "Active" },
                  { id: 6, name: "Bluetooth Speaker", category: "Electronics", price: "$79.99", status: "Inactive" },
                  { id: 7, name: "Leather Wallet", category: "Accessories", price: "$39.99", status: "Active" },
                  { id: 8, name: "Fitness Tracker", category: "Electronics", price: "$89.99", status: "Active" },
                ].map((product) => (
                  <div key={product.id} className="grid grid-cols-12 items-center border-b p-4">
                    <div className="col-span-5 font-medium">{product.name}</div>
                    <div className="col-span-2 text-sm text-muted-foreground">{product.category}</div>
                    <div className="col-span-1 text-sm">{product.price}</div>
                    <div className="col-span-2">
                      <span className={`rounded-full px-2 py-1 text-xs ${product.status === "Active" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                        {product.status}
                      </span>
                    </div>
                    <div className="col-span-2 flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        {product.status === "Active" ? "Disable" : "Enable"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-muted-foreground">
                  Showing 8 of 248 products
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                Import Products
              </Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

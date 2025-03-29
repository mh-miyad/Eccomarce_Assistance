"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Edit, Trash2, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

// Mock FAQ data
const initialFaqs = [
  {
    id: 1,
    question: "How do I track my order?",
    answer: "You can track your order by clicking on the 'Track Order' button in the chatbot and entering your order number.",
    category: "Orders",
  },
  {
    id: 2,
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all products in their original condition. Please use the chatbot's 'Return' option to initiate a return.",
    category: "Returns",
  },
  {
    id: 3,
    question: "How can I contact customer service?",
    answer: "You can contact our customer service team by clicking on the 'Talk to a human' option in the chatbot, or by emailing support@example.com.",
    category: "Support",
  },
  {
    id: 4,
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.",
    category: "Shipping",
  },
  {
    id: 5,
    question: "How do I change my account password?",
    answer: "You can change your password by going to the Account Settings page and selecting the 'Change Password' option.",
    category: "Account",
  },
];

export default function FAQManagerPage() {
  const [faqs, setFaqs] = useState(initialFaqs);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [editingFaq, setEditingFaq] = useState<{
    id: number;
    question: string;
    answer: string;
    category: string;
  } | null>(null);
  const [newFaq, setNewFaq] = useState({
    question: "",
    answer: "",
    category: "General",
  });
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const categories = ["All", "Orders", "Returns", "Shipping", "Products", "Account", "Support", "General"];

  const filteredFaqs = faqs.filter(
    (faq) =>
      (selectedCategory === "All" || faq.category === selectedCategory) &&
      (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleAddFaq = () => {
    const newId = Math.max(...faqs.map((faq) => faq.id)) + 1;
    setFaqs([...faqs, { id: newId, ...newFaq }]);
    setNewFaq({
      question: "",
      answer: "",
      category: "General",
    });
    setIsAddDialogOpen(false);
  };

  const handleEditFaq = () => {
    if (editingFaq) {
      setFaqs(faqs.map((faq) => (faq.id === editingFaq.id ? editingFaq : faq)));
      setIsEditDialogOpen(false);
    }
  };

  const handleDeleteFaq = (id: number) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">FAQ Management</h2>
        <p className="text-muted-foreground">
          Add, edit, and manage frequently asked questions for your chatbot.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search FAQs..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2 w-full md:w-auto justify-between md:justify-end">
          <select
            className="border rounded-md h-10 bg-background px-3 text-sm outline-none w-40"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add FAQ
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New FAQ</DialogTitle>
                <DialogDescription>
                  Add a new frequently asked question to your chatbot's knowledge base.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="question" className="text-sm font-medium">
                    Question
                  </label>
                  <Input
                    id="question"
                    placeholder="Enter the question"
                    value={newFaq.question}
                    onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="answer" className="text-sm font-medium">
                    Answer
                  </label>
                  <Textarea
                    id="answer"
                    placeholder="Enter the answer"
                    rows={4}
                    value={newFaq.answer}
                    onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="category" className="text-sm font-medium">
                    Category
                  </label>
                  <select
                    id="category"
                    className="border rounded-md h-10 bg-background px-3 text-sm outline-none"
                    value={newFaq.category}
                    onChange={(e) => setNewFaq({ ...newFaq, category: e.target.value })}
                  >
                    {categories.filter((cat) => cat !== "All").map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddFaq}>Save FAQ</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Question</TableHead>
                    <TableHead>Answer</TableHead>
                    <TableHead className="w-[100px]">Category</TableHead>
                    <TableHead className="w-[100px] text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredFaqs.map((faq) => (
                    <TableRow key={faq.id}>
                      <TableCell className="font-medium">{faq.question}</TableCell>
                      <TableCell className="line-clamp-2">{faq.answer}</TableCell>
                      <TableCell>{faq.category}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Dialog open={isEditDialogOpen && editingFaq?.id === faq.id} onOpenChange={(open) => {
                            setIsEditDialogOpen(open);
                            if (open) setEditingFaq(faq);
                          }}>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon" onClick={() => setEditingFaq(faq)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Edit FAQ</DialogTitle>
                                <DialogDescription>
                                  Update this frequently asked question.
                                </DialogDescription>
                              </DialogHeader>
                              {editingFaq && (
                                <div className="grid gap-4 py-4">
                                  <div className="grid gap-2">
                                    <label htmlFor="edit-question" className="text-sm font-medium">
                                      Question
                                    </label>
                                    <Input
                                      id="edit-question"
                                      value={editingFaq.question}
                                      onChange={(e) =>
                                        setEditingFaq({ ...editingFaq, question: e.target.value })
                                      }
                                    />
                                  </div>
                                  <div className="grid gap-2">
                                    <label htmlFor="edit-answer" className="text-sm font-medium">
                                      Answer
                                    </label>
                                    <Textarea
                                      id="edit-answer"
                                      rows={4}
                                      value={editingFaq.answer}
                                      onChange={(e) =>
                                        setEditingFaq({ ...editingFaq, answer: e.target.value })
                                      }
                                    />
                                  </div>
                                  <div className="grid gap-2">
                                    <label htmlFor="edit-category" className="text-sm font-medium">
                                      Category
                                    </label>
                                    <select
                                      id="edit-category"
                                      className="border rounded-md h-10 bg-background px-3 text-sm outline-none"
                                      value={editingFaq.category}
                                      onChange={(e) =>
                                        setEditingFaq({ ...editingFaq, category: e.target.value })
                                      }
                                    >
                                      {categories.filter((cat) => cat !== "All").map((category) => (
                                        <option key={category} value={category}>
                                          {category}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              )}
                              <DialogFooter>
                                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                                  Cancel
                                </Button>
                                <Button onClick={handleEditFaq}>Update FAQ</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteFaq(faq.id)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredFaqs.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-6 text-muted-foreground">
                        No FAQs found for the current filters.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.filter(c => c !== "All").map((category) => {
              const categoryFaqs = faqs.filter((faq) => faq.category === category);
              return (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle>{category}</CardTitle>
                    <CardDescription>{categoryFaqs.length} questions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {categoryFaqs.slice(0, 3).map((faq) => (
                        <li key={faq.id} className="text-sm">
                          {faq.question}
                        </li>
                      ))}
                      {categoryFaqs.length > 3 && (
                        <li className="text-sm text-muted-foreground">
                          +{categoryFaqs.length - 3} more questions
                        </li>
                      )}
                      {categoryFaqs.length === 0 && (
                        <li className="text-sm text-muted-foreground">No questions in this category</li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

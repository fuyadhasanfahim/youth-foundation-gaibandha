'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

export default function FindDonorPage() {
    const [bloodGroup, setBloodGroup] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        // Implement API call or filtering logic here
        console.log({ bloodGroup, location });
    };

    return (
        <div className="min-h-screen py-12 px-4 container">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-primary">
                    Find a Blood Donor
                </h1>
                <p className="text-muted-foreground text-sm mt-2">
                    Search for donors by blood group and location.
                </p>
            </div>

            {/* Search Form */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <div>
                    <Label htmlFor="bloodGroup">Blood Group</Label>
                    <select
                        id="bloodGroup"
                        className="w-full border rounded-md h-10 px-3 mt-1 text-sm"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                    >
                        <option value="">Select</option>
                        {bloodGroups.map((group) => (
                            <option key={group} value={group}>
                                {group}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                        id="location"
                        placeholder="Enter your location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>

                <div className="flex items-end">
                    <Button className="w-full" onClick={handleSearch}>
                        <Search className="w-4 h-4 mr-2" /> Search
                    </Button>
                </div>
            </div>

            {/* Donor Results (Mock Data) */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4].map((_, i) => (
                    <Card key={i}>
                        <CardHeader>
                            <CardTitle>Donor #{i + 1}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-1 text-muted-foreground">
                            <p>
                                <strong>Blood Group:</strong> A+
                            </p>
                            <p>
                                <strong>Location:</strong> Gaibandha
                            </p>
                            <p>
                                <strong>Contact:</strong> +880123456789
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

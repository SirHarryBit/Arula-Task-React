import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast, ToastContainer } from 'react-toastify';

export default function SettingsTab() {
    return (
        <Card>
            <ToastContainer />
            <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Update your account information and security settings.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" placeholder="Enter new username" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Current Password</Label>
                        <Input id="password" type="password" placeholder="Enter new password" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="newpassword">New Password</Label>
                        <Input id="newpassword" type="password" placeholder="Enter new password" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="2fa" />
                        <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
                    </div>
                    <Button type="submit" onClick={() => { toast.success("Changes saved. Implementation to be added in final build.") }} className="w-full">Save Changes</Button>
                </form>
            </CardContent>
        </Card>
    );
}

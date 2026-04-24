import React, { useState } from 'react';
import { Button, Input, Card } from '../components';

export function BasicFormExample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    alert('Form submitted successfully!');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <Card variant="elevated" padding="lg">
        <h2 style={{ 
          marginTop: 0, 
          marginBottom: 'var(--spacing-6)',
          fontSize: 'var(--font-size-2xl)',
          fontWeight: 'var(--font-weight-bold)'
        }}>
          Sign Up
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Input
              label="Full Name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              error={errors.name}
              fullWidth
            />
            
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
              fullWidth
            />
            
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={errors.password}
              helperText={!errors.password ? 'Must be at least 8 characters' : undefined}
              fullWidth
            />
            
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={loading}
            >
              Create Account
            </Button>
            
            <Button
              type="button"
              variant="ghost"
              size="md"
              fullWidth
              onClick={() => setFormData({ name: '', email: '', password: '' })}
            >
              Clear Form
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

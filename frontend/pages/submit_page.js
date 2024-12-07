import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SensorForm from '../components/SensorForm';
import { submitSensorData } from '../utils/contract';
import { validateSensorData } from '../utils/validation';

export default function SubmitPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      setError(null);

      // Validate the data
      const validationError = validateSensorData(data);
      if (validationError) {
        throw new Error(validationError);
      }

      // Submit to contract
      await submitSensorData(data);

      // Redirect to dashboard on success
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Submit Sensor Data</h1>
              <p className="text-gray-600 mt-2">
                Submit your sensor readings to earn rewards. All submissions are validated
                before processing.
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <SensorForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />

            <div className="bg-blue-50 border border-blue-200 p-4 rounded">
              <h3 className="font-semibold text-blue-800">Guidelines</h3>
              <ul className="mt-2 space-y-2 text-blue-600">
                <li>• Humidity must be between 0-100%</li>
                <li>• Soil moisture must be between 0-100%</li>
                <li>• Data must be from the current timestamp</li>
                <li>• Rewards are distributed for valid submissions only</li>
              </ul>
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => router.push('/dashboard')}
                disabled={isSubmitting}
              >
                Back to Dashboard
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold text-green-800">
            Smart Agriculture Sensor Network
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Monitor and track your agricultural sensors while earning rewards for contributing to the network.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-700">Submit Sensor Data</h3>
              <p className="text-gray-600 mt-2">Upload your sensor readings and earn rewards</p>
              <Button 
                className="mt-4 w-full bg-green-600 hover:bg-green-700"
                onClick={() => router.push('/submit')}
              >
                Submit Data
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-700">View Dashboard</h3>
              <p className="text-gray-600 mt-2">Monitor network activity and track rewards</p>
              <Button 
                className="mt-4 w-full bg-green-600 hover:bg-green-700"
                onClick={() => router.push('/dashboard')}
              >
                Open Dashboard
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="p-4">
              <h3 className="font-semibold text-green-700">Real-time Monitoring</h3>
              <p className="text-gray-600 mt-2">Track humidity and soil moisture data in real-time</p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-green-700">Token Rewards</h3>
              <p className="text-gray-600 mt-2">Earn tokens for contributing valid sensor data</p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-green-700">Data Validation</h3>
              <p className="text-gray-600 mt-2">Automated validation ensures data quality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ApplicationForm = ({ selectedPosition }) => {
  const [uploadedFiles, setUploadedFiles] = useState({
    cv: null,
    siaLicense: null,
    photoId: null,
    proofOfAddress: null
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      postcode: '',
      rightToWork: '',
      position: '',
      preferredLocation: '',
      employmentType: '',
      hasExperience: '',
      experienceDescription: '',
      yearsOfExperience: '',
      sitesWorked: '',
      rolesResponsibilities: '',
      hasSIALicense: '',
      licenseNumber: '',
      licenseExpiry: '',
      otherCertifications: '',
      availability: [],
      availableImmediately: '',
      noticePeriod: '',
      whyIndiguard: '',
      criminalRecord: '',
      criminalRecordDetails: '',
      backgroundCheckConsent: '',
      declarationAccuracy: false,
      declarationConsent: false
    }
  });

  const handleFileUpload = (type, event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles(prev => ({
        ...prev,
        [type]: file
      }));
    }
  };

  const removeFile = (type) => {
    setUploadedFiles(prev => ({
      ...prev,
      [type]: null
    }));
  };

  const onSubmit = async (data) => {
  try {
    // Create FormData instance
    const formData = new FormData();

    // Append all text fields from `data`
    Object.entries(data).forEach(([key, value]) => {
      // For array values like availability, append each separately
      if (Array.isArray(value)) {
        value.forEach(item => formData.append(key, item));
      } else {
        formData.append(key, value);
      }
    });

    // Append uploaded files
    Object.entries(uploadedFiles).forEach(([key, file]) => {
      if (file) formData.append(key, file);
    });

    // POST to your backend API
    const response = await fetch('https://indiguard-backend.onrender.com/api/apply/', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Submission failed');
    }

    alert('Application submitted successfully! We will contact you soon.');
  } catch (error) {
    console.error('Submission error:', error);
    alert('There was an error submitting your application. Please try again.');
  }
};


  const watchedHasExperience = watch('hasExperience');
  const watchedHasSIALicense = watch('hasSIALicense');
  const watchedCriminalRecord = watch('criminalRecord');

  return (
    <div className="bg-surface rounded-lg border border-border p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="FileText" size={24} className="text-primary" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-primary mb-2">
          Job Application Form
        </h3>
        <p className="text-text-secondary">
          {selectedPosition ? `Applying for: ${selectedPosition}` : 'Select a position to apply'}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* 1. Personal Information */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-primary border-b border-border pb-2">
            1. Personal Information
          </h4>
          
          <Input
            {...register('fullName', { required: 'Full name is required' })}
            placeholder="Full Name"
            error={errors.fullName?.message}
          />

          <Input
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            type="email"
            placeholder="Email Address"
            error={errors.email?.message}
          />

          <Input
            {...register('phone', { required: 'Phone number is required' })}
            type="tel"
            placeholder="Phone Number"
            error={errors.phone?.message}
          />

          <Input
            {...register('address', { required: 'Address is required' })}
            placeholder="Current Address"
            error={errors.address?.message}
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                {...register('postcode', { required: 'Postcode is required' })}
                placeholder="Postcode"
                error={errors.postcode?.message}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Right to Work in the UK *
              </label>
              <select
                {...register('rightToWork', { required: 'This field is required' })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                  errors.rightToWork ? 'border-error' : 'border-border'
                }`}
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.rightToWork && (
                <p className="mt-1 text-sm text-error">{errors.rightToWork.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* 2. Position Applied For */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-primary border-b border-border pb-2">
            2. Position Applied For
          </h4>

          <div>
            <select
              {...register('position', { required: 'Please select a position' })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                errors.position ? 'border-error' : 'border-border'
              }`}
            >
              <option value="">Select Position</option>
              <option value="Door Supervisor">Door Supervisor</option>
              <option value="Mobile Patrol Officer">Mobile Patrol Officer</option>
              <option value="Security Guard">Security Guard</option>
              <option value="Event Security Officer">Event Security</option>
              <option value="Alarm Response Officer">Retail Security</option>
              <option value="Retail Security Officer">Retail Security</option>
            </select>
            {errors.position && (
              <p className="mt-1 text-sm text-error">{errors.position.message}</p>
            )}
          </div>

          <Input
            {...register('preferredLocation')}
            placeholder="Preferred Location (Postcode)"
          />

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Work Preference *
            </label>
            <select
              {...register('employmentType', { required: 'Please select your preference' })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                errors.employmentType ? 'border-error' : 'border-border'
              }`}
            >
              <option value="">Select</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Night shifts">Night shifts</option>
              <option value="Day shifts">Day shifts</option>
              <option value="Flexible">Flexible</option>
            </select>
            {errors.employmentType && (
              <p className="mt-1 text-sm text-error">{errors.employmentType.message}</p>
            )}
          </div>
        </div>

        {/* 3. Experience */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-primary border-b border-border pb-2">
            3. Experience
          </h4>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Do you have previous experience in security? *
            </label>
            <select
              {...register('hasExperience', { required: 'This field is required' })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                errors.hasExperience ? 'border-error' : 'border-border'
              }`}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.hasExperience && (
              <p className="mt-1 text-sm text-error">{errors.hasExperience.message}</p>
            )}
          </div>

          {watchedHasExperience === 'yes' && (
            <>
              <Input
                {...register('experienceDescription')}
                placeholder="Please describe your experience"
              />

              <Input
                {...register('yearsOfExperience')}
                type="number"
                placeholder="Number of years experience"
              />

              <Input
                {...register('sitesWorked')}
                placeholder="Type of sites worked at (e.g. retail, event, corporate)"
              />

              <div>
                <textarea
                  {...register('rolesResponsibilities')}
                  placeholder="Roles and responsibilities"
                  rows={3}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                />
              </div>
            </>
          )}
        </div>

        {/* 4. Licensing */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-primary border-b border-border pb-2">
            4. Licensing
          </h4>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Do you hold a valid SIA licence? *
            </label>
            <select
              {...register('hasSIALicense', { required: 'This field is required' })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                errors.hasSIALicense ? 'border-error' : 'border-border'
              }`}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.hasSIALicense && (
              <p className="mt-1 text-sm text-error">{errors.hasSIALicense.message}</p>
            )}
          </div>

          {watchedHasSIALicense === 'yes' && (
            <>
              <Input
                {...register('licenseNumber')}
                placeholder="SIA Licence number"
              />

              <Input
                {...register('licenseExpiry')}
                type="date"
                placeholder="Expiry date"
              />
            </>
          )}

          <Input
            {...register('otherCertifications')}
            placeholder="Any other certifications? (e.g. First Aid, Fire Marshal)"
          />
        </div>

        {/* 5. Availability */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-primary border-b border-border pb-2">
            5. Availability
          </h4>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Days available to work *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                <label key={day} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={day}
                    {...register('availability', { required: 'Please select at least one day' })}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  />
                  <span className="text-sm text-text-primary">{day}</span>
                </label>
              ))}
            </div>
            {errors.availability && (
              <p className="mt-1 text-sm text-error">{errors.availability.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Are you available to start immediately? *
            </label>
            <select
              {...register('availableImmediately', { required: 'This field is required' })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                errors.availableImmediately ? 'border-error' : 'border-border'
              }`}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.availableImmediately && (
              <p className="mt-1 text-sm text-error">{errors.availableImmediately.message}</p>
            )}
          </div>

          <Input
            {...register('noticePeriod')}
            placeholder="Notice period (if any)"
          />
        </div>

        {/* 6. Upload Documents */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-primary border-b border-border pb-2">
            6. Upload Documents
          </h4>

          {/* CV Upload */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              CV (PDF/DOC) *
            </label>
            {!uploadedFiles.cv ? (
              <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileUpload('cv', e)}
                  className="hidden"
                  id="cv-upload"
                  required
                />
                <label htmlFor="cv-upload" className="cursor-pointer">
                  <Icon name="Upload" size={24} className="text-text-secondary mx-auto mb-2" />
                  <p className="text-sm text-text-secondary">Click to upload CV</p>
                </label>
              </div>
            ) : (
              <div className="flex items-center justify-between p-3 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="FileText" size={16} className="text-success" />
                  <span className="text-sm text-success">{uploadedFiles.cv.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile('cv')}
                  className="text-error hover:text-error/80"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
            )}
          </div>

          {/* SIA Licence Upload */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Copy of SIA Licence (Optional)
            </label>
            {!uploadedFiles.siaLicense ? (
              <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload('siaLicense', e)}
                  className="hidden"
                  id="sia-upload"
                />
                <label htmlFor="sia-upload" className="cursor-pointer">
                  <Icon name="Upload" size={24} className="text-text-secondary mx-auto mb-2" />
                  <p className="text-sm text-text-secondary">Click to upload SIA Licence</p>
                </label>
              </div>
            ) : (
              <div className="flex items-center justify-between p-3 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="FileText" size={16} className="text-success" />
                  <span className="text-sm text-success">{uploadedFiles.siaLicense.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile('siaLicense')}
                  className="text-error hover:text-error/80"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Photo ID Upload */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Photo ID (Passport/Driver's License) *
            </label>
            {!uploadedFiles.photoId ? (
              <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload('photoId', e)}
                  className="hidden"
                  id="photo-id-upload"
                  required
                />
                <label htmlFor="photo-id-upload" className="cursor-pointer">
                  <Icon name="Upload" size={24} className="text-text-secondary mx-auto mb-2" />
                  <p className="text-sm text-text-secondary">Click to upload Photo ID</p>
                </label>
              </div>
            ) : (
              <div className="flex items-center justify-between p-3 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="FileText" size={16} className="text-success" />
                  <span className="text-sm text-success">{uploadedFiles.photoId.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile('photoId')}
                  className="text-error hover:text-error/80"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Proof of Address Upload */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Proof of Address (Recent utility bill or bank statement) *
            </label>
            {!uploadedFiles.proofOfAddress ? (
              <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload('proofOfAddress', e)}
                  className="hidden"
                  id="address-upload"
                  required
                />
                <label htmlFor="address-upload" className="cursor-pointer">
                  <Icon name="Upload" size={24} className="text-text-secondary mx-auto mb-2" />
                  <p className="text-sm text-text-secondary">Click to upload Proof of Address</p>
                </label>
              </div>
            ) : (
              <div className="flex items-center justify-between p-3 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="FileText" size={16} className="text-success" />
                  <span className="text-sm text-success">{uploadedFiles.proofOfAddress.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile('proofOfAddress')}
                  className="text-error hover:text-error/80"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 7. Additional Info */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-primary border-b border-border pb-2">
            7. Additional Information
          </h4>

          <div>
            <textarea
              {...register('whyIndiguard')}
              placeholder="Why do you want to work for IndiGuard Security?"
              rows={3}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Do you have a criminal record? *
            </label>
            <select
              {...register('criminalRecord', { required: 'This field is required' })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                errors.criminalRecord ? 'border-error' : 'border-border'
              }`}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.criminalRecord && (
              <p className="mt-1 text-sm text-error">{errors.criminalRecord.message}</p>
            )}
          </div>

          {watchedCriminalRecord === 'yes' && (
            <Input
              {...register('criminalRecordDetails')}
              placeholder="Please provide details"
            />
          )}

          <div>
            <label className="flex items-center space-x-3">
              <input
                {...register('backgroundCheckConsent', { required: 'This field is required' })}
                type="checkbox"
                className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
              />
              <span className="text-sm text-text-primary">
                I am willing to undergo a background check *
              </span>
            </label>
            {errors.backgroundCheckConsent && (
              <p className="mt-1 text-sm text-error">This field is required</p>
            )}
          </div>
        </div>

        {/* 8. Declaration & Consent */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-primary border-b border-border pb-2">
            8. Declaration & Consent
          </h4>

          <div>
            <label className="flex items-center space-x-3">
              <input
                {...register('declarationAccuracy', { required: 'This field is required' })}
                type="checkbox"
                className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
              />
              <span className="text-sm text-text-primary">
                I confirm the information provided is true and accurate *
              </span>
            </label>
            {errors.declarationAccuracy && (
              <p className="mt-1 text-sm text-error">This field is required</p>
            )}
          </div>

          <div>
            <label className="flex items-center space-x-3">
              <input
                {...register('declarationConsent', { required: 'This field is required' })}
                type="checkbox"
                className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
              />
              <span className="text-sm text-text-primary">
                I consent to my data being stored and used for the recruitment process *
              </span>
            </label>
            {errors.declarationConsent && (
              <p className="mt-1 text-sm text-error">This field is required</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isSubmitting}
            iconName={isSubmitting ? "Loader2" : "Send"}
            iconPosition="left"
            className={isSubmitting ? "animate-pulse" : ""}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;

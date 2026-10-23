'use client';
import { Form, Input, Button, ConfigProvider, App, message } from 'antd';
import MaskedInput from 'antd-mask-input';
import styles from './RequestForm.module.css';
import { useEffect, useState } from 'react';
import { submitRequest } from '@/app/actions/submitRequest';

interface RequestFormProps {
    onSuccess?: () => void;
    onClose?: () => void;
    isModal?: boolean;
}

interface FormValues {
    name: string;
    phone: string;
    email: string;
}

export default function RequestForm({
    onSuccess,
    onClose,
    isModal,
}: RequestFormProps) {
    const [form] = Form.useForm<FormValues>();
    const [primaryColor, setPrimaryColor] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const fetchPrimaryColor = () => {
        const rootStyles = getComputedStyle(document.documentElement);
        return rootStyles.getPropertyValue('--text-primary').trim();
    };

    useEffect(() => {
        const initialColor = fetchPrimaryColor();
        setPrimaryColor(initialColor);

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleThemeChange = () => {
            const updatedColor = fetchPrimaryColor();
            setPrimaryColor(updatedColor);
        };

        mediaQuery.addEventListener('change', handleThemeChange);

        return () => {
            mediaQuery.removeEventListener('change', handleThemeChange);
        };
    }, []);

    const handleSubmit = async (values: FormValues) => {
        setIsSubmitting(true);
        try {
            const result = await submitRequest(values);
            if (result.success) {
                form.resetFields();
                messageApi.success({
                    content:
                        'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
                    duration: 5,
                });
                if (isModal && onClose) {
                    setTimeout(() => {
                        onClose();
                    }, 1000);
                }
                if (onSuccess) onSuccess();
            } else {
                messageApi.error({
                    content: result.error || 'Не удалось отправить заявку',
                    duration: 4,
                });
            }
        } catch (error) {
            console.error('Form submission error:', error);
            messageApi.error({
                content: 'Произошла ошибка при отправке заявки',
                duration: 4,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Form: {
                        labelColor: primaryColor,
                    },
                },
            }}
        >
            <App>
                {contextHolder}
                <div className={styles['form-wrapper']}>
                    <p className={styles['form-title']}>
                        Получить оптовый прайс-лист и полный комплект
                        разрешительной документации
                    </p>
                    <Form<FormValues>
                        layout="vertical"
                        form={form}
                        onFinish={handleSubmit}
                    >
                        <Form.Item
                            label="Имя"
                            name="name"
                            rules={[{ required: true, message: 'Введите имя' }]}
                        >
                            <Input placeholder="Например: Владимир" />
                        </Form.Item>

                        <Form.Item
                            label="Телефон"
                            name="phone"
                            rules={[
                                { required: true, message: 'Введите телефон' },
                                {
                                    pattern: /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/,
                                    message:
                                        'Введите корректный номер телефона',
                                },
                            ]}
                            className={styles.label}
                        >
                            <MaskedInput
                                mask="+7-000-000-00-00"
                                placeholder="+7-900-000-00-00"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Введите электронную почту',
                                },
                                {
                                    type: 'email',
                                    message: 'Неверный формат email',
                                },
                            ]}
                        >
                            <Input placeholder="example@yandex.ru" />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                htmlType="submit"
                                block
                                className={styles['btn-submit']}
                                loading={isSubmitting}
                            >
                                Получить
                            </Button>
                        </Form.Item>

                        {isModal && (
                            <Form.Item>
                                <Button block onClick={onClose}>
                                    Закрыть
                                </Button>
                            </Form.Item>
                        )}

                        <p className={styles.label}>
                            Нажимая на кнопку вы даёте согласие на обработку
                            персональных данных
                        </p>
                    </Form>
                </div>
            </App>
        </ConfigProvider>
    );
}
